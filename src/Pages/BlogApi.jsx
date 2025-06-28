import React, { useState, useEffect } from 'react';

const BlogApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    // fetch API call
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products); // API returns { products: [...] }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div class="container mx-auto py-10">
      <h2 className='text-center font-bold'>Product List (Using fetch)</h2>
      <div class="flex flex-wrap">
      <ul className='flex flex-wrap Product_Boxes ext-3x'>
        {products.map((item) => (
          <li key={item.id} className='border-double py-5 px-5 border-2 border-color-gray m-2'>
            
            <img 
              src={item.images[0]} 
              alt={item.title} 
              width={250}
              height={250}
              style={{ objectFit: 'cover', borderRadius: '8px' }}/>
              <p className='text-center truncate'> <strong >{item.title}</strong> </p>
               <p className='text-center font-bold underline'>${item.price}  </p>
          </li>
        ))}
     </ul>
    </div>
   </div>
  );
};

export default BlogApi;
