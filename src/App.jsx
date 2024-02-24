import { products } from "./utils/products";
import ProductCard from "./components/product_card";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-5xl text-center mb-2">Count: {count}</h1>
      {/* tailwind grid system, 3 products in a row */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} data={product} state={{ count, setCount }} />;
        })}
      </div>
    </div>
  )
}
