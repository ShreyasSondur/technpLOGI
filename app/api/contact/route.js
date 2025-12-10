// ensure the route runs under Node (not Edge)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Pool } from "pg";

// Reuse pool across requests (important for performance)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // optionally set ssl: { rejectUnauthorized: false } if needed for your env
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 1) Save to Postgres
    const insertQuery = `
      INSERT INTO contacts (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `;
    const values = [name, email, phone, message];

    let saved;
    try {
      const result = await pool.query(insertQuery, values);
      saved = result.rows[0]; // { id, created_at }
    } catch (dbErr) {
      console.error("DB error:", dbErr);
      return NextResponse.json(
        { success: false, message: "Database error" },
        { status: 500 }
      );
    }

    // 2) Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MY_RECEIVE_MAIL,
      subject: "New Contact Form Submission",
      text: `
New contact received

ID: ${saved.id}
Created at: ${saved.created_at}

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Mail sent for contact id:", saved.id);
    } catch (mailErr) {
      console.error("Mail error:", mailErr);
      // We don't fail the whole request if mail fails. You can decide to fail instead.
      // return NextResponse.json({ success: false, message: "Mail error" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: saved.id });
  } catch (err) {
    console.error("Handler error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
