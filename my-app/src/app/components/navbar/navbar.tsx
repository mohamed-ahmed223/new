"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar(){

    function HandleSignoutToLogin(){

        signOut({redirect:true , callbackUrl:"/login"})
    }

    let session = useSession()
    console.log("session" , session)
    
 return <>
<nav className="bg-slate-300"> 
    <div className="containerpy-2 w-full md:w-[90%] mx-auto flex justify-between">
        <div className="left">
            <ul className="flex gap-3">
                <li><Link href="/cart" className="font-bold text-xl"><i className="fa-solid fa-cart-arrow-down text-yellow-400"></i>FreshCart</Link></li>
                <li><Link href="/">Home</Link></li>

<li className="relative">
<span className="bg-red-500 text-white text-sm absolute p-2 rounded-2xl -right-13 ">
</span>
<Link href="/cart"></Link>
</li>

                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="brands">Brands</Link></li>
            </ul>
        </div>
        <div className="right">
            <ul className="flex gap-3">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-tiktok"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>



{session.data ? <li><button onClick={HandleSignoutToLogin}>SignOut</button></li> : <>
 <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li></> }


                
               






            </ul>
        </div>
    </div>
    
</nav>
  </>
}
