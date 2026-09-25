"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (isAdmin !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-12">
      {/* HEADER */}
      <div className="flex justify-between items-center border-b border-white/10 pb-6">
        <div>
          <p className="text-xs tracking-[0.35em] text-neutral-500">
            AVENOIR
          </p>
          <h1 className="text-4xl font-light mt-2">
            Admin Dashboard
          </h1>
        </div>

        <button
          onClick={logout}
          className="border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Link
          href="/admin/products"
          className="border border-white/10 p-6 rounded-xl hover:border-white transition"
        >
          <p className="text-neutral-500 text-sm mb-2">01</p>
          <h2 className="text-2xl font-light">Products</h2>
          <p className="text-neutral-500 mt-3 text-sm">
            Edit products, prices and stock.
          </p>
        </Link>

        <div className="border border-white/10 p-6 rounded-xl">
          <p className="text-neutral-500 text-sm mb-2">02</p>
          <h2 className="text-2xl font-light">Orders</h2>
          <p className="text-neutral-500 mt-3 text-sm">
            Coming soon
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded-xl">
          <p className="text-neutral-500 text-sm mb-2">03</p>
          <h2 className="text-2xl font-light">Analytics</h2>
          <p className="text-neutral-500 mt-3 text-sm">
            Coming soon
          </p>
        </div>
      </div>
    </main>
  );
}