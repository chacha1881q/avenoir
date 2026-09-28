"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

const defaultProducts: Product[] = [
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
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Hoodie",
    price: "",
    stock: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("avenoir_products");
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(defaultProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(
        "avenoir_products",
        JSON.stringify(products)
      );
    }
  }, [products]);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    setProducts([
      ...products,
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
      category: "Hoodie",
      price: "",
      stock: "",
    });
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const update = (
    id: number,
    field: "price" | "stock",
    value: number
  ) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-56 border-r border-white/10 p-6 flex flex-col">
        <h1 className="text-3xl tracking-[0.35em] mb-12">
          AVENOIR
        </h1>

        <nav className="space-y-4 text-sm">
          <Link href="/admin" className="text-neutral-400 hover:text-white block">
            Dashboard
          </Link>
          <Link href="/admin/products" className="text-white block">
            Ürünler
          </Link>
          <Link href="/admin/orders" className="text-neutral-400 hover:text-white block">
            Siparişler
          </Link>
          <Link href="/admin/customers" className="text-neutral-400 hover:text-white block">
            Müşteriler
          </Link>
          <Link href="/admin/settings" className="text-neutral-400 hover:text-white block">
            Ayarlar
          </Link>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            location.href = "/admin/login";
          }}
          className="mt-auto text-red-400 text-sm"
        >
          Çıkış Yap
        </button>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-5xl font-extralight">
              Product Manager
            </h2>
            <p className="text-neutral-500 mt-2">
              {products.length} ürün yönetiliyor
            </p>
          </div>
        </div>

        <div className="border border-white/10 p-8 mb-8">
          <h3 className="text-xl mb-5">Yeni Ürün</h3>

          <div className="grid grid-cols-4 gap-4">
            <input
              placeholder="Ürün Adı"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
              className="bg-transparent border border-white/10 px-4 py-3 outline-none"
            />

            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                })
              }
              className="bg-black border border-white/10 px-4 py-3"
            >
              <option>Hoodie</option>
              <option>T-Shirt</option>
              <option>Jacket</option>
              <option>Accessory</option>
            </select>

            <input
              type="number"
              placeholder="Fiyat"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
              className="bg-transparent border border-white/10 px-4 py-3"
            />

            <input
              type="number"
              placeholder="Stok"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  stock: e.target.value,
                })
              }
              className="bg-transparent border border-white/10 px-4 py-3"
            />
          </div>

          <button
            onClick={addProduct}
            className="mt-5 bg-white text-black px-8 py-3 tracking-[0.2em]"
          >
            ADD PRODUCT
          </button>
        </div>

        <div className="border border-white/10">
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
              {products.map((p) => (
                <tr key={p.id} className="border-b border-white/5">
                  <td className="p-5">{p.name}</td>
                  <td>{p.category}</td>

                  <td>
                    <div className="flex items-center gap-2">
                      ₺
                      <input
                        type="number"
                        value={p.price}
                        onChange={(e) =>
                          update(
                            p.id,
                            "price",
                            Number(e.target.value)
                          )
                        }
                        className="w-24 bg-transparent border border-white/10 px-2 py-1"
                      />
                    </div>
                  </td>

                  <td>
                    <input
                      type="number"
                      value={p.stock}
                      onChange={(e) =>
                        update(
                          p.id,
                          "stock",
                          Number(e.target.value)
                        )
                      }
                      className={`w-20 bg-transparent border px-2 py-1 ${
                        p.stock <= 5
                          ? "border-red-500 text-red-400"
                          : "border-white/10"
                      }`}
                    />
                  </td>

                  <td className="text-right p-5">
                    <button
                      onClick={() => removeProduct(p.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      DELETE
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