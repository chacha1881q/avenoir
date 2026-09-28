"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Obsidian Hoodie",
      category: "Hoodie",
      price: 2490,
      stock: 18,
    },
    {
      id: 2,
      name: "Shadow Hoodie",
      category: "Hoodie",
      price: 2490,
      stock: 12,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const addProduct = () => {
    if (!newProduct.name) return;

    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newProduct.name,
        category: newProduct.category,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      },
    ]);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updatePrice = (id: number, value: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: value } : p))
    );
  };

  const updateStock = (id: number, value: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: value } : p))
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-56 border-r border-white/10 p-6 flex flex-col">
        <h1 className="text-3xl tracking-[0.35em] mb-12">AVENOIR</h1>

        <nav className="space-y-4 text-sm">
          <Link href="/admin" className="block text-neutral-400 hover:text-white">
            Dashboard
          </Link>

          <Link href="/admin/products" className="block text-white">
            Ürünler
          </Link>

          <Link href="/admin/orders" className="block text-neutral-400 hover:text-white">
            Siparişler
          </Link>

          <Link href="/admin/customers" className="block text-neutral-400 hover:text-white">
            Müşteriler
          </Link>

          <Link href="/admin/settings" className="block text-neutral-400 hover:text-white">
            Ayarlar
          </Link>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            location.href = "/admin/login";
          }}
          className="mt-auto text-red-400 text-sm hover:text-red-300"
        >
          Çıkış Yap
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-5xl font-extralight tracking-wide">
              Product Manager
            </h2>

            <p className="text-neutral-500 mt-2">
              {products.length} ürün yönetiliyor
            </p>
          </div>

          <button className="border border-white px-6 py-3 tracking-[0.25em] hover:bg-white hover:text-black transition">
            SAVE
          </button>
        </div>

        {/* Add Product */}
        <section className="border border-white/10 p-8 mb-8">
          <h3 className="text-xl mb-6">Yeni Ürün</h3>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <input
              placeholder="Ürün Adı"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="bg-transparent border border-white/10 px-4 py-3 outline-none focus:border-white"
            />

            <input
              placeholder="Kategori"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="bg-transparent border border-white/10 px-4 py-3 outline-none focus:border-white"
            />

            <input
              type="number"
              placeholder="Fiyat"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="bg-transparent border border-white/10 px-4 py-3 outline-none focus:border-white"
            />

            <input
              type="number"
              placeholder="Stok"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              className="bg-transparent border border-white/10 px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <button
            onClick={addProduct}
            className="bg-white text-black px-8 py-3 tracking-[0.25em] hover:opacity-90"
          >
            ADD PRODUCT
          </button>
        </section>

        {/* Products */}
        <section className="border border-white/10">
          <table className="w-full">
            <thead className="border-b border-white/10 text-neutral-500 text-sm">
              <tr>
                <th className="text-left p-5">ÜRÜN</th>
                <th className="text-left">KATEGORİ</th>
                <th className="text-left">FİYAT</th>
                <th className="text-left">STOK</th>
                <th className="text-right p-5">İŞLEM</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="p-5">{product.name}</td>

                  <td className="text-neutral-400">{product.category}</td>

                  <td>
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        updatePrice(product.id, Number(e.target.value))
                      }
                      className="w-28 bg-transparent border border-white/10 px-3 py-2 outline-none"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={product.stock}
                      onChange={(e) =>
                        updateStock(product.id, Number(e.target.value))
                      }
                      className="w-20 bg-transparent border border-white/10 px-3 py-2 outline-none"
                    />
                  </td>

                  <td className="text-right p-5">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}