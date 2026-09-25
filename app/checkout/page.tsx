"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("M");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    setQty(Number(localStorage.getItem("avenoirQty") || 0));
    setSize(localStorage.getItem("avenoirSize") || "M");
  }, []);

  const total = qty * 2490;

  const placeOrder = () => {
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !zip ||
      !card ||
      !expiry ||
      !cvv
    ) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.removeItem("avenoirQty");
    localStorage.removeItem("avenoirSize");

    window.location.href = "/success";
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <Link
            href="/"
            className="tracking-[0.35em] text-lg font-light"
          >
            AVENOIR
          </Link>

          <p className="text-xs tracking-[0.3em] text-neutral-400">
            SECURE CHECKOUT
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 px-8 py-16">
        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[0.35em] text-neutral-500 mb-3">
            DELIVERY
          </p>

          <h1 className="text-5xl font-light mb-10">
            Shipping Details
          </h1>

          <div className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
            />

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street Address"
              className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
              />

              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZIP Code"
                className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-14">
            <p className="text-xs tracking-[0.35em] text-neutral-500 mb-3">
              PAYMENT
            </p>

            <h2 className="text-3xl font-light mb-8">
              Card Information
            </h2>

            <div className="space-y-4">
              <input
                value={card}
                onChange={(e) => setCard(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
                />

                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  className="w-full bg-[#0B0B0B] border border-white/10 p-4 outline-none focus:border-white transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:sticky top-10 h-fit border border-white/10 bg-[#090909] p-8">
          <h2 className="text-2xl font-light mb-8">
            Order Summary
          </h2>

          <div className="flex gap-4">
            <img
              src="/hoodie.jpg"
              alt="Obsidian Hoodie"
              className="w-28 h-36 object-cover"
            />

            <div className="flex-1">
              <h3 className="text-lg">Obsidian Hoodie</h3>

              <p className="text-neutral-500 text-sm mt-1">
                Size {size}
              </p>

              <p className="text-neutral-500 text-sm">
                Quantity {qty}
              </p>

              <p className="mt-4 text-lg">₺2.490</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 space-y-4 text-sm">
            <div className="flex justify-between text-neutral-400">
              <span>Subtotal</span>
              <span>₺{total.toLocaleString("tr-TR")}</span>
            </div>

            <div className="flex justify-between text-neutral-400">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-neutral-400">
              <span>Taxes</span>
              <span>Included</span>
            </div>

            <div className="border-t border-white/10 pt-5 flex justify-between text-xl">
              <span>Total</span>
              <span>₺{total.toLocaleString("tr-TR")}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-white text-black py-4 tracking-[0.3em] hover:opacity-90 transition"
          >
            PLACE ORDER
          </button>

          <p className="text-center text-xs text-neutral-500 mt-5 leading-5">
            Secure SSL encrypted checkout.
            Your payment information is never stored.
          </p>
        </div>
      </div>
    </main>
  );
}