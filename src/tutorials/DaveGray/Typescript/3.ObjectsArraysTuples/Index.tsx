

export default function Index() {


    let stringArr = ["Platen", "Prime", "Coda"];

    let books = [1984, "The Hobbit", "Harry Potter"];

    let mixedData = ["Platen", 42, true];


    stringArr[0] = "Prime";

    stringArr.push("Coda");



    books[0] = 1985;
    books.push("The Lord of the Rings");
    books.push(true);


    books = stringArr

    let test = []

    const bands: string[] = ["Coda", "Prime"]
    bands.push("Platen")
    bands.push(8345)


    // Tuples 

    let myTuple: [string, number, boolean] = ["Platen", 42, true];


    let mixed = ["Platen", 42, true]


    myTuple = mixed

    mixed = myTuple

    myTuple[5] = "Prime"








    // Object

    let myObj: object

    myObj = ["Platen", 42, true]


    console.log(typeof myObj);

    myObj = books
    

const exampleObj = {
    name: "Platen",
    age: 42,
    isAdmin: true
}



exampleObj.isAdmin =false 



interface Person {
    name?: string
    age?: (number | string)[]
    isAdmin: boolean
}

let evh: Person = {
    name: "Platen",
    age: [42, "Prime"],
    isAdmin: true
}

console.table(evh);



const greetPerson = (person: Person) => {

if (person.name) {
    console.log(`Hello ${person.name.toLocaleLowerCase()}`)

}
}


greetPerson(evh)






enum Role { ADMIN = 4, READ_ONLY = 7, AUTHOR }






console.log(Role.ADMIN);
console.table(Role);
console.warn(Role);










    return (
        <div>Index</div>
    )
}
