

function Checkout() { return ( <div className="min-h-[60vh]">
 <h1 className="text-3xl font-bold text-gray-800"> Checkout </h1>
 <div className="mt-8 grid gap-8 md:grid-cols-2">
 <div className="rounded-2xl bg-white p-6 shadow">
 <h2 className="text-xl font-bold"> Delivery Details </h2>
 <div className="mt-5 space-y-4">
 <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
 <input type="text" placeholder="Phone Number" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
 <textarea placeholder="Delivery Address" rows="4" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" ></textarea>
 <input type="text" placeholder="City" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
 <input type="text" placeholder="Pincode" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500" />
 </div>
 </div>
 <div className="h-fit rounded-2xl bg-white p-6 shadow">
 <h2 className="text-xl font-bold"> Order Summary </h2>
 <div className="mt-6 flex justify-between text-gray-600"> <span>Subtotal</span> <span>₹0</span> </div>
 <div className="mt-3 flex justify-between text-gray-600"> <span>Delivery</span> <span>₹0</span> </div>
 <hr className="my-5" />
 <div className="flex justify-between text-xl font-bold"> <span>Total</span> <span>₹0</span> </div>
 <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700" > Place Order </button>
 </div>
 </div>
 </div> );}
export default Checkout;