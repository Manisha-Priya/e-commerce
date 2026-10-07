import { Link } from "react-router";
import {useCart} from "../context/CartContext";

function Wishlist() {
  const {wishlistItem,removeFromWishlist} = useCart();
  return (
    <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

      <h1 className="text-2xl font-bold text-gray-900">
        My Wishlist
      </h1>
      {wishlistItem.length===0? (
      <p className="mt-3 text-gray-500">
        Your wishlisted products will appear here.
      </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {wishlistItem.map((item) => (
             <div key={item.id}
              className="rounded-xl border border-gray-200 p-4" >
                 <img src={item.image} alt={item.name}
                  className="h-48 w-full object-contain" />
                   <h2 className="mt-4 font-semibold text-gray-900">
                     {item.name} 
                    </h2>
                    
                    <p className="mt-2 font-bold text-gray-900">
                       ₹{item.price}
                    </p>

                     <button onClick={() =>
                       removeFromWishlist(item.id)}
                        className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600" >
                           Remove
                      </button>
          </div> ))}
    </div>
         )}
      
      

      <Link
        to="/products"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Browse Products
      </Link>

    </div>
  );
}

export default Wishlist;
