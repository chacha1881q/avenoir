
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
    &lt;div className="min-h-screen bg-black text-white"&gt;
      &lt;aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 p-6"&gt;
        &lt;h1 className="text-2xl tracking-[0.3em] mb-10"&gt;AVENOIR&lt;/h1&gt;

        &lt;nav className="space-y-3"&gt;
          &lt;Link href="/admin" className="block text-white"&gt;Dashboard&lt;/Link&gt;
          &lt;Link href="/admin/products" className="block text-neutral-400 hover:text-white"&gt;Ürünler&lt;/Link&gt;
          &lt;Link href="/admin/orders" className="block text-neutral-400 hover:text-white"&gt;Siparişler&lt;/Link&gt;
          &lt;Link href="/admin/customers" className="block text-neutral-400 hover:text-white"&gt;Müşteriler&lt;/Link&gt;
          &lt;Link href="/admin/settings" className="block text-neutral-400 hover:text-white"&gt;Ayarlar&lt;/Link&gt;
        &lt;/nav&gt;

        &lt;button
          onClick={() =&gt; {
            localStorage.removeItem("admin");
            location.href = "/admin/login";
          }}
          className="absolute bottom-6 left-6 text-red-400"
        &gt;
          Çıkış Yap
        &lt;/button&gt;
      &lt;/aside&gt;

      &lt;main className="ml-64 p-10"&gt;
        &lt;h2 className="text-4xl font-light mb-8"&gt;Dashboard&lt;/h2&gt;

        &lt;div className="grid grid-cols-4 gap-6"&gt;
          {cards.map((card) =&gt; (
            &lt;Link
              key={card.title}
              href={card.href}
              className="border border-white/10 p-6 hover:border-white transition"
            &gt;
              &lt;p className="text-neutral-500"&gt;{card.title}&lt;/p&gt;
              &lt;h3 className="text-3xl mt-3"&gt;{card.value}&lt;/h3&gt;
            &lt;/Link&gt;
          ))}
        &lt;/div&gt;

        &lt;div className="mt-10 border border-white/10 p-6"&gt;
          &lt;h3 className="text-xl mb-4"&gt;Son Siparişler&lt;/h3&gt;

          &lt;table className="w-full text-left"&gt;
            &lt;thead className="text-neutral-500"&gt;
              &lt;tr&gt;
                &lt;th className="py-3"&gt;No&lt;/th&gt;
                &lt;th&gt;Müşteri&lt;/th&gt;
                &lt;th&gt;Tutar&lt;/th&gt;
                &lt;th&gt;Durum&lt;/th&gt;
              &lt;/tr&gt;
            &lt;/thead&gt;

            &lt;tbody&gt;
              &lt;tr className="border-t border-white/10"&gt;
                &lt;td className="py-4"&gt;#1001&lt;/td&gt;
                &lt;td&gt;Kerem&lt;/td&gt;
                &lt;td&gt;₺2.350&lt;/td&gt;
                &lt;td className="text-green-400"&gt;Tamamlandı&lt;/td&gt;
              &lt;/tr&gt;

              &lt;tr className="border-t border-white/10"&gt;
                &lt;td className="py-4"&gt;#1002&lt;/td&gt;
                &lt;td&gt;Ayşe&lt;/td&gt;
                &lt;td&gt;₺1.180&lt;/td&gt;
                &lt;td className="text-yellow-400"&gt;Hazırlanıyor&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/tbody&gt;
          &lt;/table&gt;
        &lt;/div&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
  