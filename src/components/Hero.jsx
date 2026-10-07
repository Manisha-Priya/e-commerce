
function Hero() {
    return (
        <>
        <section className="bg-gray-900 px-10 py-10">
            <div className="max-w-6xl mx-auto flex item-centre justify-between">
                <div className="w-1/2">
                    <p className="text-gray-100 mb-3">
                        New Collections
                    </p>
                    <h1 className="text-5xl font-bold text-red-500 mb-3">
                        Grab your perfect style
                    </h1>
                    <p className="text-gray-100 mt-5">
                        Discover the perfect fit for you
                    </p>
                        <button className="mt-20 bg-black text-white px-6 py-3 rounded-lg">
                            Shop Now
                        </button>
                    
                </div>
                <div className="w-1/2">
                    <img src="https://thumbs.dreamstime.com/b/couple-doing-shopping-happy-beautiful-young-holding-bags-looking-showcase-smiling-standing-mall-67280980.jpg" alt="Shopping" className="w-full h-96 object-cover rounded-xl"/>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;