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
      <aside className="w-64 border-r border-white/10 p-6">
        <h1 className="text-2xl tracking-[0.3em] mb-10">AVENOIR</h1>

        <nav className="space-y-3">
          <Link href="/admin" className="block text-neutral-500 hover:text-white">
            Dashboard
          </Link>
          <Link href="/admin/products" className="block text-white">
            Ürünler
          </Link>
          <Link href="/admin/orders" className="block text-neutral-500 hover:text-white">
            Siparişler
          </Link>
          <Link href="/admin/customers" className="block text-neutral-500 hover:text-white">
            Müşteriler
          </Link>
          <Link href="/admin/settings" className="block text-neutral-500 hover:text-white">
            Ayarlar
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-light">Ürün Yönetimi</h2>
            <p className="text-neutral-500 mt-2">
              Toplam {products.length} ürün
            </p>
          </div>

          <button className="border border-white px-6 py-3 tracking-[0.2em] hover:bg-white hover:text-black transition">
            SAVE
          </button>
        </div>

        {/* Add Product */}
        <div className="border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl mb-5">Yeni Ürün Ekle</h3>

          <div className="grid grid-cols-4 gap-4">
            <input
              placeholder="Ürün Adı"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="bg-transparent border border-white/20 px-4 py-3 outline-none"
            />

            <input
              placeholder="Kategori"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="bg-transparent border border-white/20 px-4 py-3 outline-none"
            />

            <input
              type="number"
              placeholder="Fiyat"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="bg-transparent border border-white/20 px-4 py-3 outline-none"
            />

            <input
              type="number"
              placeholder="Stok"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              className="bg-transparent border border-white/20 px-4 py-3 outline-none"
            />
          </div>

          <button
            onClick={addProduct}
            className="mt-5 bg-white text-black px-6 py-3 tracking-[0.2em]"
          >
            ÜRÜN EKLE
          </button>
        </div>

        {/* Product Table */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="border-b border-white/10 text-neutral-500">
              <tr>
                <th className="text-left p-5">Ürün</th>
                <th className="text-left">Kategori</th>
                <th className="text-left">Fiyat</th>
                <th className="text-left">Stok</th>
                <th className="text-right p-5">İşlem</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-5">{product.name}</td>

                  <td>{product.category}</td>

                  <td>
                    <input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        updatePrice(product.id, Number(e.target.value))
                      }
                      className="w-28 bg-transparent border border-white/10 px-3 py-2"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={product.stock}
                      onChange={(e) =>
                        updateStock(product.id, Number(e.target.value))
                      }
                      className="w-20 bg-transparent border border-white/10 px-3 py-2"
                    />
                  </td>

                  <td className="text-right p-5">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}