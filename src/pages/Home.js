import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/skeleton/ProductSkeleton";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, 2500);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10">
      {products ? (
        products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )}
    </div>
  );
};

export default Home;
