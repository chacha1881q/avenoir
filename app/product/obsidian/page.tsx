"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartDrawer from "../../../components/CartDrawer";

export default function ProductPage() {
  const [size, setSize] = useState("M");
  const [image, setImage] = useState("/hoodie.jpg");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartQty, setCartQty] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const images = [
    "/hoodie.jpg",
    "/hoodie2.jpg",
    "/hoodie3.jpg",
    "/hoodie4.jpg",
  ];

  useEffect(() => {
    const updateCart = () => {
      setCartQty(Number(localStorage.getItem("avenoirQty") || 0));
    };

    updateCart();
    window.addEventListener("focus", updateCart);

    return () => window.removeEventListener("focus", updateCart);
  }, []);

  const addToBag = () => {
    const current = Number(localStorage.getItem("avenoirQty") || 0);
    const next = current + 1;

    localStorage.setItem("avenoirQty", String(next));
    localStorage.setItem("avenoirSize", size);

    setCartQty(next);
    setCartOpen(true);
  };

  return (
    <>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* SIZE GUIDE */}
      {sizeGuideOpen && (
        <>
          <div
            onClick={() => setSizeGuideOpen(false)}
            className="fixed inset-0 bg-black/70 z-50"
          />

          <div className="fixed left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#0D0D0D] border border-white/10 p-8 z-[60]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="tracking-[0.25em] text-sm">SIZE GUIDE</h2>

              <button
                onClick={() => setSizeGuideOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <table className="w-full text-sm">
              <thead className="text-neutral-500 border-b border-white/10">
                <tr>
                  <th className="text-left py-3">Size</th>
                  <th>Chest</th>
                  <th>Length</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["S", "56", "68"],
                  ["M", "59", "71"],
                  ["L", "62", "74"],
                  ["XL", "65", "77"],
                ].map(([s, c, l]) => (
                  <tr
                    key={s}
                    className="border-b border-white/5 text-center"
                  >
                    <td className="text-left py-4">{s}</td>
                    <td>{c} cm</td>
                    <td>{l} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-xs text-neutral-500 mt-6 leading-6">
              Oversized fit. For a regular silhouette choose one size down.
            </p>
          </div>
        </>
      )}

      <main className="bg-black text-white min-h-screen">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 z-50">
          <div className="flex items-center justify-between px-8 md:px-14 py-6">
            <Link
              href="/"
              className="tracking-[0.35em] text-lg font-light hover:opacity-80 transition"
            >
              AVENOIR
            </Link>

            <button
              onClick={() => setCartOpen(true)}
              className="relative text-lg hover:scale-110 transition"
            >
              👜

              {cartQty > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-black text-[10px] flex items-center justify-center font-medium">
                  {cartQty}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 pt-24">
          {/* LEFT */}
          <div className="p-4">
            <img
              src={image}
              alt="Obsidian Hoodie"
              className="w-full h-[760px] object-cover"
            />

            <div className="grid grid-cols-4 gap-3 mt-3">
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setImage(img)}
                  className={`overflow-hidden border transition ${
                    image === img
                      ? "border-white"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  <img
                    src={img}
                    alt="Product thumbnail"
                    className="w-full h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:sticky top-24 h-fit p-10 md:p-16">
            <p className="text-xs tracking-[0.35em] text-neutral-500">
              AVENOIR ESSENTIALS
            </p>

            <h1 className="text-5xl font-light mt-4">Obsidian Hoodie</h1>

            <p className="text-3xl mt-6 font-light">₺2.490</p>

            <p className="text-neutral-400 mt-8 leading-8">
              Heavyweight premium cotton hoodie with oversized silhouette.
              Designed for timeless wear and everyday luxury.
            </p>

            {/* SIZE */}
            <div className="mt-10">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm tracking-[0.25em]">SIZE · {size}</p>

                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs text-neutral-400 hover:text-white transition"
                >
                  Size Guide
                </button>
              </div>

              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`w-14 h-14 border text-sm transition ${
                      size === item
                        ? "bg-white text-black border-white"
                        : "border-white/20 hover:border-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* STOCK */}
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Only 8 left in stock
            </div>

            {/* BUTTON */}
            <button
              onClick={addToBag}
              className="w-full mt-8 py-4 border border-white tracking-[0.3em] hover:bg-white hover:text-black transition"
            >
              ADD TO BAG
            </button>

            {/* ACCORDION */}
            <div className="mt-12 border-t border-white/10">
              <button
                onClick={() =>
                  setOpenSection(
                    openSection === "composition" ? null : "composition"
                  )
                }
                className="w-full flex justify-between items-center py-5 border-b border-white/10"
              >
                <span className="tracking-[0.18em] text-sm">
                  COMPOSITION
                </span>
                <span className="text-xl">
                  {openSection === "composition" ? "−" : "+"}
                </span>
              </button>

              {openSection === "composition" && (
                <div className="pb-5 text-sm text-neutral-400 leading-7">
                  100% heavyweight premium cotton. 480 GSM brushed fleece
                  interior with reinforced double stitching and ribbed cuffs.
                </div>
              )}

              <button
                onClick={() =>
                  setOpenSection(
                    openSection === "shipping" ? null : "shipping"
                  )
                }
                className="w-full flex justify-between items-center py-5 border-b border-white/10"
              >
                <span className="tracking-[0.18em] text-sm">
                  SHIPPING & RETURNS
                </span>
                <span className="text-xl">
                  {openSection === "shipping" ? "−" : "+"}
                </span>
              </button>

              {openSection === "shipping" && (
                <div className="pb-5 text-sm text-neutral-400 leading-7">
                  Free worldwide shipping. Delivery in 2–5 business days.
                  Returns accepted within 14 days.
                </div>
              )}

              <button
                onClick={() =>
                  setOpenSection(openSection === "care" ? null : "care")
                }
                className="w-full flex justify-between items-center py-5 border-b border-white/10"
              >
                <span className="tracking-[0.18em] text-sm">
                  CARE INSTRUCTIONS
                </span>
                <span className="text-xl">
                  {openSection === "care" ? "−" : "+"}
                </span>
              </button>

              {openSection === "care" && (
                <div className="pb-5 text-sm text-neutral-400 leading-7">
                  Wash inside out at 30°C. Do not tumble dry. Iron on low heat.
                  Do not bleach.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="px-8 md:px-14 py-24 border-t border-white/10">
          <p className="text-xs tracking-[0.35em] text-neutral-500">
            YOU MAY ALSO LIKE
          </p>

          <h2 className="text-4xl font-light mt-4 mb-12">
            Related Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/product" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src="/hoodie3.jpg"
                  alt="Shadow Hoodie"
                  className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="text-xl">Shadow Hoodie</h3>
                  <p className="text-neutral-500 text-sm">Premium Cotton</p>
                </div>

                <span>₺2.490</span>
              </div>
            </Link>

            <Link href="/product" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src="/hoodie4.jpg"
                  alt="Midnight Hoodie"
                  className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="text-xl">Midnight Hoodie</h3>
                  <p className="text-neutral-500 text-sm">Relaxed Fit</p>
                </div>

                <span>₺2.490</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}