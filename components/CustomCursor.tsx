"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-4 h-4 border border-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}