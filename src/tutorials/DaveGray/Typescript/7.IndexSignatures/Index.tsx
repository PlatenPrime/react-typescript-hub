

export default function Index() {



    interface TransactionsObj {
        readonly [key: string]: number | string;
        Pizza: number,
        Books: number,
        readonly Job: string
    }







    const todayTransactions: TransactionsObj = {
        Pizza: -10,
        Books: -5,
        Job: "Car",
        Dave: "Train"
    }



    console.log(todayTransactions.Pizza);
    console.log(todayTransactions["Books"]);



    const prop: string = "Pizza"
    console.log(todayTransactions[prop]);


    const todaysNet = (transactions: TransactionsObj): number => {
        let total = 0
        for (const transaction in transactions) {
            total += transactions[transaction] as number
        }
        return total
    }


    todaysNet(todayTransactions)


    // todayTransactions.Job = "School"
    // console.log(todayTransactions.Job);





    console.log(todayTransactions["Dave"]);






interface Student {
    // [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

    
const student : Student = {
    name: "Platen",
    GPA: 3.5,
    classes: [100, 200]
}



// console.log(student.test);



for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


Object.keys(student).map(key => console.log(student[key as keyof  Student]));
Object.keys(student).map(key => console.log(student[key as keyof typeof student]));


const logStudentKey = (student: Student, key: keyof Student): void => {
   console.log(`Student ${key}: ${student[key]}`);
   
}

logStudentKey(student, "name");



// interface Incomes {
//     [key: string]: number
// }


type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>


const monthlyIncomes: Incomes = {
    salary: 5000,
    bonus: 1000,
    sidehustle: 250
}



for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}







    return (
        <div>Index</div>
    )
}
