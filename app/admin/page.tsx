"use client";

import Link from "next/link";

export default function Admin() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-light mb-2">AVENOIR</h1>
      <p className="text-neutral-500 mb-12">Admin Dashboard</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/products"
          className="border border-white/10 p-8 hover:border-white transition"
        >
          <h2 className="text-2xl mb-2">Products</h2>
          <p className="text-neutral-500">Edit products & stock</p>
        </Link>

        <div className="border border-white/10 p-8">
          <h2 className="text-2xl mb-2">Orders</h2>
          <p className="text-neutral-500">Coming soon</p>
        </div>

        <div className="border border-white/10 p-8">
          <h2 className="text-2xl mb-2">Analytics</h2>
          <p className="text-neutral-500">Coming soon</p>
        </div>
      </div>
    </main>
  );
}