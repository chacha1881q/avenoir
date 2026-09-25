"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const updateCart = () => {
      setCartQty(Number(localStorage.getItem("avenoirQty") || 0));
    };

    updateCart();
    window.addEventListener("focus", updateCart);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("focus", updateCart);
    };
  }, []);

  useEffect(() => {
    if (!cartOpen) {
      setCartQty(Number(localStorage.getItem("avenoirQty") || 0));
    }
  }, [cartOpen]);

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      <main className="bg-black text-white min-h-screen">
        {/* NAVBAR */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-8 md:px-14 py-6">
            <Link
              href="/"
              className="tracking-[0.35em] text-lg font-light"
            >
              AVENOIR
            </Link>

            <nav className="hidden md:flex gap-10 text-xs tracking-[0.3em]">
              <button onClick={scrollToCollection}>SHOP</button>
              <button onClick={scrollToCollection}>COLLECTION</button>
              <a href="#">JOURNAL</a>
            </nav>

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

        {/* HERO */}
        <section className="relative h-screen overflow-hidden">
          <img
            src="/hero.jpg"
            alt="AVENOIR Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center">
              <h1 className="text-7xl md:text-9xl font-light tracking-[0.35em]">
                AVENOIR
              </h1>

              <p className="mt-6 text-sm tracking-[0.45em] text-neutral-300">
                BEYOND ORDINARY
              </p>

              <button
                onClick={scrollToCollection}
                className="mt-10 border border-white px-8 py-3 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"
              >
                EXPLORE
              </button>
            </div>
          </div>
        </section>

        {/* COLLECTION */}
        <section
          id="collection"
          className="bg-[#050505] px-8 md:px-14 py-24"
        >
          <p className="text-xs tracking-[0.35em] text-neutral-500">
            NEW COLLECTION
          </p>

          <h2 className="text-4xl md:text-6xl font-light mt-4 mb-16">
            Essentials 2026
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* OBSIDIAN */}
            <Link href="/product/obsidian" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src="/hoodie.jpg"
                  alt="Obsidian Hoodie"
                  className="w-full h-[650px] object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="/hoodie2.jpg"
                  alt="Obsidian Hoodie Back"
                  className="absolute inset-0 w-full h-[650px] object-cover opacity-0 scale-105 transition duration-700 group-hover:opacity-100 group-hover:scale-100"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="text-xl">Obsidian Hoodie</h3>
                  <p className="text-neutral-500">Oversized Fit</p>
                </div>

                <span>₺2.490</span>
              </div>
            </Link>

            {/* SHADOW */}
            <Link href="/product/shadow" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src="/hoodie3.jpg"
                  alt="Shadow Hoodie"
                  className="w-full h-[650px] object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src="/hoodie4.jpg"
                  alt="Shadow Hoodie Back"
                  className="absolute inset-0 w-full h-[650px] object-cover opacity-0 scale-105 transition duration-700 group-hover:opacity-100 group-hover:scale-100"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="text-xl">Shadow Hoodie</h3>
                  <p className="text-neutral-500">Premium Cotton</p>
                </div>

                <span>₺2.490</span>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-14 px-8 md:px-14">
          <div className="flex justify-between text-sm text-neutral-500">
            <p>© 2026 AVENOIR</p>
            <p>avenoir.co</p>
          </div>
        </footer>
      </main>
    </>
  );
}