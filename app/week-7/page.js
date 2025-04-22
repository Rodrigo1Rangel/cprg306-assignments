"use client"
import { useState } from "react";
import itemsData from "../week-6/item.json";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js"


export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return(
        <main>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList itemParam={items} />
        </main>
   )
}