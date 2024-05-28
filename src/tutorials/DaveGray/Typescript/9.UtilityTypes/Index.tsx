import React from 'react'








export default function Index() {



    // Partial 

interface Assignment {
    studentId: string;
    title: string;
    grade?: number;
    verified?: boolean;
}


const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}


const assign1: Assignment = {
    studentId: 'comsats',
    title: 'React',
    grade: 78
}

console.log(updateAssignment(assign1, { verified: true }));
const assignVerified: Assignment = updateAssignment(assign1, { verified: true });



// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db
    return assign
}

const assignVerified2: Readonly<Assignment> = {
    studentId: 'comsats',
    title: 'React',
    grade: 78,
    verified: true
}




// assignVerified2.verified = false

// recordAssignment({...assignVerified2, grade: 88});


// Record 

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}


type Students = "Comsats" | "Coda" | "Prime" | "Platen" | "CodaPrime"
type LetterGrades = "A" | "B" | "C" | "D" | "E" | "F"



const finalGrades: Record<Students, LetterGrades> = {  Coda: "A", Prime: "B", Platen: "B", CodaPrime: "C", Comsats: 'B' }







    return (
        <div>Index</div>
    )
}
