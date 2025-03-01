import ItemList from "./item-list";
import Item from "./item";

export default function Page(){
    return (
        <main className="bg-stone-900">
            <h1 className="text-5xl font-bold py-10 mx-5">Shopping List</h1>
            <ItemList/>
        </main>
    );
}