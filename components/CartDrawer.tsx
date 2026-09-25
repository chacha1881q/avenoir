"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("M");

  useEffect(() => {
    if (open) {
      setQty(Number(localStorage.getItem("avenoirQty") || 0));
      setSize(localStorage.getItem("avenoirSize") || "M");
    }
  }, [open]);

  const updateQty = (value: number) => {
    const next = Math.max(0, value);
    setQty(next);
    localStorage.setItem("avenoirQty", String(next));
  };

  const total = qty * 2490;

  return (
    <>
      {/* Arka plan */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[420px] bg-[#0B0B0B] border-l border-white/10 z-50 p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="tracking-[0.3em] text-sm">YOUR BAG</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {qty === 0 ? (
          <p className="text-neutral-500 mt-20">Your bag is empty.</p>
        ) : (
          <>
            <div className="flex gap-4">
              <img
                src="/hoodie.jpg"
                alt="Obsidian Hoodie"
                className="w-24 h-32 object-cover"
              />

              <div className="flex-1">
                <h3>Obsidian Hoodie</h3>
                <p className="text-sm text-neutral-500">Size {size}</p>
                <p className="mt-2">₺2.490</p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => updateQty(qty - 1)}
                    className="text-xl"
                  >
                    −
                  </button>

                  <span>{qty}</span>

                  <button
                    onClick={() => updateQty(qty + 1)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-6 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₺{total.toLocaleString("tr-TR")}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-white/10 text-lg">
                <span>Total</span>
                <span>₺{total.toLocaleString("tr-TR")}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full mt-6 bg-white text-black py-4 text-center tracking-[0.25em] hover:opacity-90 transition"
            >
              CHECKOUT
            </Link>
          </>
        )}
      </aside>
    </>
  );
}