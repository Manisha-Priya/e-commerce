import { Link } from "react-router";
import { useEffect,useState } from "react";
import {getProducts} from "../services/productservice";
import {Truck,ShieldCheck,RotateCcw,Headphones, Sparkles,SprayCan, ShoppingBasket,Sofa} from "lucide-react";

function Home() {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    }
  );
  },[]);
  
  return (
    <div>
     
      <section className="rounded-3xl bg-gradient-to-r from-red-600  mt-20 to-purple-600 px-8 py-16 text-white shadow-lg md:px-16">

        <div className="grid grid-cols-1 items-center gap:10 md:grid-cols-2">
        <div >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-50">
            Welcome to Shopping-Mart
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray md:text-5xl">
            Everything you need, 
            <span className="block text-blue-6=50">
              all in one place
            </span>
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Discover quality products at great prices and enjoy a simple
            shopping experience.
          </p>
        <div className="mt-8 flex flex-wrap gap-4 ">
          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow hover:bg-gray-400"
          >
            Shop Now
          </Link>
           <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow hover:bg-gray-400"
          >
            Browse Products
          </Link>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-4">
         {products.length > 0 && (
          <>
          <div>
          <div className="rounded-2xl bg-blue p-4 shadow-lg">
            <Link to="/products?category=beauty">
            <img
            src={products[1].thumbnail}
            alt={products[1].title}
            className="h-40 w-40 object-contain"
            />
            </Link>
          </div> 
          <div className="rounded-2xl bg-blue p-4 shadow-lg">
            <Link to="/products?category=fragrances">
            <img
            src={products[8].thumbnail}
            alt={products[8].title}
            className="h-40 w-40 object-contain"
            />
            </Link>
          </div> 
          </div>
          <div>
          <div className="rounded-2xl bg-blue p-4 shadow-lg lg:block">
            <Link to="/products?category=furniture">
             <img
            src={products[13].thumbnail}
            alt={products[13].title}
            className="h-40 w-40 object-contain"
            />
            </Link>
          </div>
          <div className="rounded-2xl bg-blue p-4 shadow-lg lg:block">
            <Link to="products?category=groceries">
            
             <img
            src={products[27].thumbnail}
            alt={products[27].title}
            className="h-40 w-40 object-contain"
            />
            </Link>
          </div>
          </div>
         </>
         )}
      </div>
      </div>

      </section>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Truck className="text-green-600" fill="currentcolor" size={28}/>
            <div>
              <h3 className="font-semibold text-gray-900">
              Free Delivery
              </h3>
              <p className="text-sm text-gray-500">
                On Selected Products
              </p>
            </div>

          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" fill="currentcolor" size={28}/>
            <div>
              <h3 className="font-semibold text-gray-900">
              Secure Payment
              </h3>
              <p className="text-sm text-gray-500">
                100% secure chekcout
              </p>
            </div>

          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="text-green-600"  size={28}/>
            <div>
              <h3 className="font-semibold text-gray-900">
              Easy Returns
              </h3>
              <p className="text-sm text-gray-500">
                Simple return policy
              </p>
            </div>

          </div>
          <div className="flex items-center gap-3">
            <Headphones className="text-green-600" size={28}/>
            <div>
              <h3 className="font-semibold text-gray-900">
              24/7 Support
              </h3>
              <p className="text-sm text-gray-500">
                We're here to help
              </p>
            </div>

          </div>

        </div>

      </section>
      <section className="mt-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            Shop by Category
          </h2>
        
        <Link  to="/products"
        className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >View All
        </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <Link to="/products?category=furniture"
          className="group rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-transition-y-1 hover:shadow-lg"
          >
            <Sofa  size={42}
            className="mx-auto text-blue-600 transition group-hover :scale-110"/>
            <h3 className="mt-4 font-semibold text-gray-500">
              Furniture
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Make your space beautiful
            </p>
          </Link>
              <Link to="products?category=beauty"
          className="group rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-transition-y-1 hover:shadow-lg"
          >
            <Sparkles  size={42}
            className="mx-auto text-blue-600 transition group-hover :scale-110"/>
            <h3 className="mt-4 font-semibold text-gray-500">
              Beauty
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Discover beauty products
            </p>
          </Link>
              <Link to="/products?category=fragrances"
          className="group rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-transition-y-1 hover:shadow-lg"
          >
            <SprayCan  size={42}
            className="mx-auto text-blue-600 transition group-hover :scale-110"/>
            <h3 className="mt-4 font-semibold text-gray-500">
              Fragnance
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Find your perfect fragnance
            </p>
          </Link>
              <Link to="/products?category=groceries"
          className="group rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-transition-y-1 hover:shadow-lg"
          >
            <ShoppingBasket  size={42}
            className="mx-auto text-blue-600 transition group-hover :scale-110"/>
            <h3 className="mt-4 font-semibold text-gray-500">
              Groceries
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Everyday essentials
            </p>
          </Link>
        

        </div>

      </section>

      <section className="py-12 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Why Shop With Us?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold">
              Quality Products
            </h3>
            <p className="mt-2 text-gray-500">
              Find products from different categories.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold">
              Great Prices
            </h3>
            <p className="mt-2 text-gray-500">
              Shop your favourite products at attractive prices.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold">
              Easy Shopping
            </h3>
            <p className="mt-2 text-gray-500">
              Browse, add to cart and checkout easily.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
