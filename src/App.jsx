import { useState, useEffect } from "react";
import ProductCard from './components/product_card';

export default function App() {
  const [facts, setFacts] = useState([]);

  async function get_data() {
    try {
      const response = await fetch('https://catfact.ninja/facts');
      const result = await response.json();
      setFacts(result.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {facts.map((v, i) => (
        <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <ProductCard data={v} />
        </div>
      ))}
    </div>
  );
}
