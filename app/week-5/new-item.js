"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setCartQuantity] = useState(1);

    const addItem = () => setCartQuantity(quantity + 1)
    const removeItem = () => setCartQuantity(quantity - 1)

    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleAddToCart = (event) => {
        let item = { name, quantity, category };
        console.log(item);
        alertUpdateCart(item);
        // alertUpdateCart({name, quantity, category});

        setCartQuantity(1);
        setName("");
        setCategory("produce"); 
    }

    const alertUpdateCart = (event) => {
        alert(`Added item: ${event.name}, quantity: ${event.quantity}, category: ${event.category}`)
    }

    return(
        <main className="flex justify-center w-full">
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
        
        {/*ITEM NAME*/}
        <div className="mb-2">
            <input 
            type="text"
            value={name}
            placeholder="Item name"
            onChange={(event) => setName(event.target.value)}
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
            </input>
        </div>


    <div className="flex justify-between">
        {/*CART BUTTONS*/}
        <div className="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
            <div className="flex justify-between">
                <span className="text-black">{quantity}</span>
                <div className="flex">
                    <button
                    type="button"
                    onClick={removeItem}
                    className={`w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75`}
                    disabled={(quantity===0)}>
                    -
                    </button>

                    <button
                    type="button"
                    onClick={addItem}
                    className={`w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1`}
                    disabled={(quantity===20)}>
                    + 
                    </button>
                </div>
            </div>
        </div>
        {/*CATEGORY DROPDOWN LIST*/}
        <select 
        className="inline-block ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        onChange={(event) => setCategory(event.target.value)}
        value={category}
        >
            <option value disabled>Category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="households">Household</option>
            <option value="others">Other</option>
        </select>

        </div>

        
        {/*ADD TO CART BUTTON*/}
        <button 
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick = {(event) => handleAddToCart(event)}>
        +
        </button>

        {/*<button className="w-40 h-10 bg-grey border-solid border-1 border-white rounded-2" type="submit">Submit</button>*/}
        </form>
        </main>
    )
}