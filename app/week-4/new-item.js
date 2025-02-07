"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setCartQuantity] = useState(1);

    const addItem = () => setCartQuantity(quantity + 1)
    const removeItem = () => setCartQuantity(quantity - 1)

    return(
        <main>
        <div className="flex-auto text-center">
            <p className="font-bold text-2xl mt-20">Quantity: {quantity}</p>

        <div className="content-center">
            <button
            onClick={removeItem}
            className={`w-24 h-20 m-5 border-solid border-2 border-white content-center ${quantity > 0 ? "bg-red-400" : "bg-gray-500"}`}
            disabled={(quantity===0)}>
                Remove</button>

            <button
            onClick={addItem}
            className={`w-24 h-20 m-5 border-solid border-2 border-white content-center ${quantity < 20 ? "bg-green-500" : "bg-gray-500"}`}
            disabled={(quantity===20)}>
            Add
            </button>
        
        </div>
        
        </div>

        </main>
    )
}