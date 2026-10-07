import { useState, useEffect } from "react";

import ProductCard from "../components/Product";
import { getProducts } from "../services/productservice";
import {useCart} from "../context/CartContext";
import { useParams, useSearchParams } from "react-router";
 
const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchParams] = useSearchParams();
  const urlCategory= searchParams.get("category");
  console.log("URL cat: ", urlCategory);
  useEffect(()=> {
    if (urlCategory){
      setCategory(urlCategory);
    }
  },[urlCategory]
);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts();
      
      setProducts(data);
    } catch (err) {
      console.log("Product page", err)
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchProducts();
  }, []);
 
  let filteredProducts = products.filter((item) => {
 
    // const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
 
    // const matchesCategory = category === "all" || item.category === category;
    const productTitle=item?.title || item?.name || "";
    const matchesSearch = productTitle.toLowerCase().includes(search.toLowerCase());

     const productCategory = item?.category || "";
     const matchesCategory = category === "all" || productCategory === category;

    return matchesSearch && matchesCategory;
  });
 

  if (sortBy === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }



  if (loading) {
    return <p className="py-20 text-center text-xl font-semibold text-gray-500">Loading products...</p>;
  }
 
  if (error) {
    return <p className="py-20 text-center text-xl font-semibold text-red-500">{error}</p>;
  }
 
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Our Products
      </h1>
 
      </div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm">
 
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
        />
 
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="furniture">Furniture</option>
          <option value="beauty">Beauty</option>
          <option value="groceries">Groceries</option>
          <option value="fragrances">Fragnances</option>
        </select>
 
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="default">Sort by: Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
 
      </div>
 
      
      {filteredProducts.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              category={product.category}
              price={Math.round(product.price * 80)}
              oldPrice={Math.round(product.price * 80 * 1.2)}
              rating={product.rating?.rate || 4.5}
              reviews={product.rating?.count || 45}
              stock={10}
              discount={15}
              image={product.thumbnail}
              
              
            />
          ))}
        </div>
      )}
    </div>
  );
};
 
export default Products;