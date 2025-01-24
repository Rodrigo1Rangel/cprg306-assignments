export default function Dog({ name, age, breed, color }) {
    // we are taking one argument, which is an object, but we are passing the
    // attributes of the object, which make an object. So, in the end, we are
    // still passing one object.

    // let name = props.name;
    // let age = props.age;
    // let breed = props.breed;
    // let color = props.color;

    //    let { name, age, breed, color } = props;

    return(
        <section className="bg-slate-300 m-2 p-2">
            <h3 className="font-bold text-2xl text-sky-700">{name}</h3>
            <p>Age: {age} </p>
            <p>Breed: {breed} </p>
            <p>Color: {color}</p>
        </section>
    );
}