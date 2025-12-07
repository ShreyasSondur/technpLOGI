import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENWEATHER_API_KEY" },
        { status: 500 }
      );
    }

    const city = "Mangalore";
    const countryCode = "IN";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    const temp = data.main?.temp;
    const icon = data.weather?.[0]?.icon;
    const description = data.weather?.[0]?.main || "";

    return NextResponse.json({ temp, icon, description });
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
