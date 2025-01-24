import Dog from "./dog";

export default function Page() {
    let dog1 = {
        name: "Fido",
        age: 3,
        breed: "w/e",
        color: "Brown",
    };

    let dog2 = {
        name: "Tota",
        age: 5,
        breed: "w/e2",
        color: "White",
    };

    return(
    <main>
        <h1>Week-3 demo</h1>
        <h2>We should have the data from dog1 displayed below:</h2>
        <Dog {...dog1}/>
        <h2>We should have the data from dog2 displayed below:</h2>
        <Dog {...dog2}/>
    </main>
    )
}