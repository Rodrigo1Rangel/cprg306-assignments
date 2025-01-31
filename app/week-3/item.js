export default function Item(props){
    let unitPlurality = `unit${props.quantity > 1 ? "s" : ""}`
    return (
        <main className="border-dashed border-red-200 border-3 bg-blue-400 text-2xl outline-3 p-2 mx-5 max-w-3xl mt-5">
        <p>{props.name}.</p>
        <p>Buy {props.quantity} {unitPlurality} in {props.category}.</p>
        </main>
    )
}