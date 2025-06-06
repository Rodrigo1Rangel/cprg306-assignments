"use client";
import { useState } from "react";
import Item from './item';

export default function ItemList( {itemParam, onItemSelect} ){

      // sorting preference
      const [sortBy, setSortBy] = useState("name");

      const setSortByToName = () => setSortBy ("name");
      const setSortByToCategory = () => setSortBy ("category");

      const items = [...itemParam].sort((a, b) => {
        if (sortBy == "name"){
          return a.name.localeCompare(b.name);
        }
        if (sortBy == "category"){
          return a.category.localeCompare(b.category);
        }
        return [...itemParam];
      });

      return(
        <main>
          <div className = "ml-5">
            <p className="inline text-2xl">Sort by:</p>
            <button title="name" onClick={setSortByToName} className= {`p-1 m-2 w-40 text-2xl ${sortBy === "name" ? "bg-blue-400 font-bold underline" : "bg-stone-700 font-thin"}`}>Name</button>
            <button title="category" onClick={setSortByToCategory} className = {`p-1 m-2 w-40 text-2xl ${sortBy === "category" ? "bg-blue-400 font-bold underline" : "bg-stone-700 font-thin"}`}>Category</button>
          </div>
          <div>
            {items.map((item) => (
              <Item
              key = {item.id}
              itemParam = {item}
              onSelect={onItemSelect}/>
            ))}
          </div>
        </main>
      );
}