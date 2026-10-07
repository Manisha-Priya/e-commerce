import tshirt from  "../assets/tshirt.jpg";
import Shoes from  "../assets/Shoes.jpeg";
//import Watch from  "../assets/Apple-watch.jpg";
import Handbag from  "../assets/Handbag.jpg";
import Phone from  "../assets/Phone.avif";
import Earphones from  "../assets/Earphones.jpg";
import MacBook from "../assets/MacBook.jpg"

const Products = [
    {
        id:1,
        name:'MacBook Pro',
        category:"Electronics",
        price:100000,
        oldPrice: 119999,
        rating:4.8,
        reviews:312,
        stock:10,
        discount:18,
        image: MacBook

    },
       {
        id:2,
        name:'Samsung S23',
        category:"Electronics",
        price:65000,
        oldPrice: 89999,
        rating:4.8,
        reviews:412,
        stock:12,
        discount:18,
        image: Phone

    },
       {
        id:3,
        name:'Totte bag',
        category:"Accessories",
        price:1200,
        oldPrice: 1999,
        rating:4,
        reviews:222,
        stock:1,
        discount:18,
        image: Handbag

    },
       {
        id:4,
        name:'Running Shoes',
        category:"Fashion",
        price:2000,
        oldPrice: 2999,
        rating:4.8,
        reviews:312,
        stock:10,
        discount:18,
        image: Shoes

    },
       {
        id:5,
        name:'Ear Phones',
        category:"Electronics",
        price:3000,
        oldPrice: 4999,
        rating:4.8,
        reviews:312,
        stock:10,
        discount:18,
        image: Earphones

    // },
    //    {
    //     id:6,
    //     name:'Camera',
    //     category:"Electronics",
    //     price:70000,
    //     oldPrice: 89999,
    //     rating:4.8,
    //     reviews:312,
    //     stock:10,
    //     discount:28,
    //     image: Camera

    // },
    //    {
    //     id:5,
    //     name:'Ear Phones',
    //     category:"Electronics",
    //     price:3000,
    //     oldPrice: 4999,
    //     rating:4.8,
    //     reviews:312,
    //     stock:10,
    //     discount:18,
    //     image: Earphones

    // },
    //    {
    //     id:5,
    //     name:'Ear Phones',
    //     category:"Electronics",
    //     price:3000,
    //     oldPrice: 4999,
    //     rating:4.8,
    //     reviews:312,
    //     stock:10,
    //     discount:18,
    //     image: Earphones

    }
]
export default Products;