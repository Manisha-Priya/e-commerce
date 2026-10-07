import { createContext,useContext,useState } from "react"; 

const CartContext=createContext();

export function CartProvider({children}){
    const [cartItems,setCartItems] = useState([]);
    const [wishlistItem,setWishlistItem] = useState([]);

function addToCart(product){
  
    setCartItems((prev)=> {
    const existing=prev.find((item) =>
        item.id===product.id);
    if (existing){
        return prev.map((item)=>
        item.id===product.id? {...item,quantity:item.quantity+1}:item);
    }
    return [...prev,{...product,quantity:1}];
});
}
//Remove one unit
function removeFromCart(id){
    setCartItems((prev) => 
    prev.map((item)=>
        item.id===id? {...item,quantity:item.quantity-1}:item
)
.filter((item) => item.quantity>0)

);
}
function deleteFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
 
  // Clear all
  function clearCart() {
    setCartItems([]);
  }

  function addToWishlist(product){
    setWishlistItem((prev) => {
      const existing=prev.find((item)=> 
        item.id===product.id     );
      if (existing){
        return prev;
      }
      return [...prev,product];
    });
  }
  function removeFromWishlist(id){
    setWishlistItem((prev) => 
    prev.filter((item) => item.id!==id)
  );
  }
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, deleteFromCart, clearCart,wishlistItem,addToWishlist,removeFromWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart(){
    return useContext(CartContext);

}