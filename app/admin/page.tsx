"use client";

import Link from "next/link";

const cards = [
  { title: "Toplam Ürün", value: "24", href: "/admin/products" },
  { title: "Sipariş", value: "8", href: "/admin/orders" },
  { title: "Müşteri", value: "31", href: "/admin/customers" },
  { title: "Ciro", value: "₺18.420", href: "/admin/orders" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 p-6">
        <h1 className="text-2xl tracking-[0.3em] mb-10">AVENOIR</h1>

        <nav className="space-y-3">
          <Link href="/admin" className="block text-white">
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block text-neutral-400 hover:text-white"
          >
            Ürünler
          </Link>
          <Link
            href="/admin/orders"
            className="block text-neutral-400 hover:text-white"
          >
            Siparişler
          </Link>
          <Link
            href="/admin/customers"
            className="block text-neutral-400 hover:text-white"
          >
            Müşteriler
          </Link>
          <Link
            href="/admin/settings"
            className="block text-neutral-400 hover:text-white"
          >
            Ayarlar
          </Link>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            location.href = "/admin/login";
          }}
          className="absolute bottom-6 left-6 text-red-400"
        >
          Çıkış Yap
        </button>
      </aside>

      <main className="ml-64 p-10">
        <h2 className="text-4xl font-light mb-8">Dashboard</h2>

        <div className="grid grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="border border-white/10 p-6 hover:border-white transition"
            >
              <p className="text-neutral-500">{card.title}</p>
              <h3 className="text-3xl mt-3">{card.value}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-10 border border-white/10 p-6">
          <h3 className="text-xl mb-4">Son Siparişler</h3>

          <table className="w-full text-left">
            <thead className="text-neutral-500">
              <tr>
                <th className="py-3">No</th>
                <th>Müşteri</th>
                <th>Tutar</th>
                <th>Durum</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-white/10">
                <td className="py-4">#1001</td>
                <td>Kerem</td>
                <td>₺2.350</td>
                <td className="text-green-400">Tamamlandı</td>
              </tr>

              <tr className="border-t border-white/10">
                <td className="py-4">#1002</td>
                <td>Ayşe</td>
                <td>₺1.180</td>
                <td className="text-yellow-400">Hazırlanıyor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}