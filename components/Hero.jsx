"use client";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/herobg.png')" }}
    >
      {/* Overlay for better text readability (optional) */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4">
          TechnoLOGI
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-black font-medium">
          International Private Limited
        </p>
      </div>
    </section>
  );
}
