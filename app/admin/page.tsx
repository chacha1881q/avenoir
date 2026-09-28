"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6">
        <h1 className="text-2xl tracking-[6px] font-light mb-10">
          AVENOIR
        </h1>

        <nav className="space-y-4 text-sm">
          <div className="text-white">Dashboard</div>
          <div className="text-neutral-500">Ürünler</div>
          <div className="text-neutral-500">Siparişler</div>
          <div className="text-neutral-500">Müşteriler</div>
          <div className="text-neutral-500">Ayarlar</div>
        </nav>

        <button
          onClick={logout}
          className="mt-12 w-full border border-red-500 py-2 hover:bg-red-600 transition"
        >
          Çıkış Yap
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">

        <h2 className="text-3xl font-light mb-8">
          Admin Dashboard
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5 mb-10">

          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <p className="text-neutral-400 text-sm">Toplam Ürün</p>
            <h3 className="text-3xl mt-2">24</h3>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <p className="text-neutral-400 text-sm">Sipariş</p>
            <h3 className="text-3xl mt-2">8</h3>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <p className="text-neutral-400 text-sm">Müşteri</p>
            <h3 className="text-3xl mt-2">51</h3>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <p className="text-neutral-400 text-sm">Ciro</p>
            <h3 className="text-3xl mt-2">₺12.450</h3>
          </div>

        </div>

        {/* Orders */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">

          <h3 className="text-xl mb-5">Son Siparişler</h3>

          <table className="w-full text-sm">
            <thead className="text-neutral-400 border-b border-white/10">
              <tr>
                <th className="text-left py-3">Sipariş</th>
                <th className="text-left">Müşteri</th>
                <th className="text-left">Tutar</th>
                <th className="text-left">Durum</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-white/5">
                <td className="py-4">#1001</td>
                <td>Kerem</td>
                <td>₺1.890</td>
                <td className="text-green-400">Ödendi</td>
              </tr>

              <tr className="border-b border-white/5">
                <td className="py-4">#1002</td>
                <td>Ayşe</td>
                <td>₺990</td>
                <td className="text-yellow-400">Hazırlanıyor</td>
              </tr>

              <tr>
                <td className="py-4">#1003</td>
                <td>Can</td>
                <td>₺2.450</td>
                <td className="text-blue-400">Kargoda</td>
              </tr>

            </tbody>
          </table>

        </div>

      </main>
    </div>
  );
}