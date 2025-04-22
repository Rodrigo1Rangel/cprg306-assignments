export default function Item({itemParam, onSelect}){
    let unitPlurality = `unit${itemParam.quantity > 1 ? "s" : ""}`
    return (
        <main 
        className="border-dashed border-red-200 border-3 bg-blue-400 text-2xl outline-3 p-2 mx-5 max-w-3xl mt-5"
        onClick={() => onSelect(itemParam)}>
        <p>{itemParam.name}.</p>
        <p>Buy {itemParam.quantity} {unitPlurality} in {itemParam.category}.</p>
        </main>
    )
}