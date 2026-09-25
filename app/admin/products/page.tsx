"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Obsidian Hoodie",
      price: 2490,
      stock: 18,
    },
    {
      id: 2,
      name: "Shadow Hoodie",
      price: 2490,
      stock: 12,
    },
  ]);

  const updatePrice = (id: number, value: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, price: value } : p
      )
    );
  };

  const updateStock = (id: number, value: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: value } : p
      )
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-light mb-2">
        Product Manager
      </h1>

      <p className="text-neutral-500 mb-10">
        AVENOIR Admin Panel
      </p>

      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-white/10 p-6 rounded-xl"
          >
            <h2 className="text-2xl mb-5">
              {product.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-neutral-400 block mb-2">
                  Price (₺)
                </label>

                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    updatePrice(
                      product.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400 block mb-2">
                  Stock
                </label>

                <input
                  type="number"
                  value={product.stock}
                  onChange={(e) =>
                    updateStock(
                      product.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-white text-black px-8 py-3 tracking-[0.25em] hover:opacity-90 transition">
        SAVE CHANGES
      </button>
    </main>
  );
}