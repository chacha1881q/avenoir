"use client";

import Link from "next/link";

export default function SuccessPage() {
  const orderId = Math.floor(
    100000 + Math.random() * 900000
  );

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center mx-auto mb-8 text-4xl">
          ✓
        </div>

        <p className="text-xs tracking-[0.35em] text-neutral-500">
          AVENOIR
        </p>

        <h1 className="text-5xl font-light mt-5">
          Order Confirmed
        </h1>

        <p className="text-neutral-400 mt-6 leading-8">
          Thank you for your purchase. Your order has been
          successfully received and is now being prepared.
        </p>

        <div className="border border-white/10 mt-12 p-6 text-left">
          <div className="flex justify-between">
            <span className="text-neutral-500">Order ID</span>
            <span>#{orderId}</span>
          </div>

          <div className="flex justify-between mt-4">
            <span className="text-neutral-500">Shipping</span>
            <span>2–5 Business Days</span>
          </div>

          <div className="flex justify-between mt-4">
            <span className="text-neutral-500">Status</span>
            <span className="text-emerald-400">Confirmed</span>
          </div>
        </div>

        <Link
          href="/"
          className="block w-full mt-10 bg-white text-black py-4 tracking-[0.3em] hover:opacity-90 transition"
        >
          CONTINUE SHOPPING
        </Link>

        <p className="text-xs text-neutral-500 mt-8">
          A confirmation email will be sent shortly.
        </p>
      </div>
    </main>
  );
}