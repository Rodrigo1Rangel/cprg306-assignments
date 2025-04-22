"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./item.json"
import { MealIdeas } from "./meal-ideas";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
 
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (item) => {
    console.log(item.name);
    let name = String(item.name);
    name = name.split(',')[0];
    console.log(name);
    name = name.replace(/[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1FAFF}]/gu, '');
    console.log(name);
    name = name.replace(/[0-9\s.,]+$/, '');
    console.log(name);
    name = name.replace(/\s+/g, '_');
    console.log(name);
    setSelectedItemName(name);
  }

    return(
        <main>
            {user ? (
            <div>
                <button onClick={firebaseSignOut}>Sign Out</button>
                <div className="flex">
                    <div>
                        <NewItem onAddItem={handleAddItem}/>
                        <ItemList 
                        itemParam={items}
                        onItemSelect={handleItemSelect}/>
                    </div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            ) : (
            <div>
                <p>Sign in</p>
                <button onClick={gitHubSignIn}>Sign in with GitHub</button>
            </div>
            )}
        </main>
   )
}