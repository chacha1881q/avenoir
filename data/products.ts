export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Shadow Hoodie",
    price: 2490,
    stock: 12,
    category: "Hoodie",
    image: "/products/shadow.jpg",
  },
  {
    id: 2,
    name: "Noir Tee",
    price: 1190,
    stock: 28,
    category: "T-Shirt",
    image: "/products/noir.jpg",
  },
];