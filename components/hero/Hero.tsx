"use client"

import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-surface">
          <HeroScene/>
      </div>

      <div className="pointer-events-none relative z-10">
        <h1 className="text-4xl font-bold">Thisara Warshan Gunasinghe</h1>
      </div>
    </section>
  );
}
