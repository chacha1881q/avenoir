"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
      <div className="text-center animate-pulse">
        <h1 className="text-white text-5xl md:text-7xl font-light tracking-[0.45em]">
          AVENOIR
        </h1>

        <p className="mt-5 text-neutral-500 tracking-[0.35em] text-xs">
          BEYOND ORDINARY
        </p>
      </div>
    </div>
  );
}