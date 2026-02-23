
"use client"
import React, { useContext } from "react";
import { createContext } from "react";
export default function Cart (){


useContext();



return <>
 <h1 className="text-2xl text-center font-semibold mb-8">Shopping Cart</h1>

  <div className=" gap-8 items-start">




    <div className=" w-3/4 mx-auto space-y-8 ">

      <div className=" mx-auto items-center gap-5 p-5 bg-gray-50 rounded-xl shadow-sm">
        <img
          src="https://via.placeholder.com/80"
          alt="product"
          className="w-20 h-20 rounded-lg object-cover"/>
          

        <div className="flex-1">
          <h3 className="font-semibold">title of product</h3>
          <p className="text-sm text-gray-500">zara</p>
          <p className="text-sm text-gray-500">men</p>

          <div className="flex items-center gap-3 mt-3">
            <button className="w-8 h-8 border rounded-md">−</button>
            <span className="font-medium">2</span>
            <button className="w-8 h-8 border rounded-md">+</button>
          </div>
        </div>

        <div className="text-right">
          <p className="text-green-500 font-semibold">$500</p>
          <button className="mt-6 flex items-center gap-1 text-red-500 text-sm">
            🗑 Remove
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <a href="#" className="text-purple-600 ms-5 flex items-center gap-1">
          ← Continue Shopping
        </a>

        <button className="flex items-center gap-2 px-4 py-2 border border-red-400 rounded-lg hover:bg-red-500">
          🗑 Clear Cart
        </button>
      </div>
    </div>

    <div className="w-[60%] mx-auto mt-5 p-6 bg-white rounded-xl shadow-md border">
      <h2 className="font-semibold mb-6">Order Summary</h2>

      <div className="flex justify-between mb-4 text-sm">
        <span>Total Items</span>
        <span>10</span>
      </div>

      <div className="flex justify-between font-semibold mb-6">
        <span>Total Price</span>
        <span className="text-purple-600">$54645</span>
      </div>

      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700">
        Checkout
      </button>

      <p className="text-xs text-gray-400 text-center mt-4">
        Taxes and shipping calculated at checkout
      </p>
    </div>
    </div>

</>
}