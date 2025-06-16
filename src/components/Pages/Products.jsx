// src/pages/Products.jsx

import React, { useEffect, useState } from 'react';
import { fetchWatches } from '../services/api';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWatches();
      setWatches(data);
    };
    loadData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {watches.map(watch => (
        <ProductCard key={watch.id} product={watch} />
      ))}
    </div>
  );
};

export default Products;
