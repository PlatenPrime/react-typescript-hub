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



interface Grades {
    assign1: number;
    assign2: number;
    assign3: number;
}


const gradeData: Record<Students, Grades> = {
    Comsats: { assign1: 79, assign2: 0, assign3: 83 },
    Coda: { assign1: 79, assign2: 0, assign3: 83 },
    Prime: { assign1: 79, assign2: 0, assign3: 83 },
    Platen: { assign1: 79, assign2: 0, assign3: 83 },
    CodaPrime: { assign1: 79, assign2: 0, assign3: 83 },
}




// Pick and Omit


type AssignPreview = Pick<Assignment, 'studentId' | 'title'>

type AssignPreview2 = Omit<Assignment, 'grade' | 'verified'>


const score: AssignPreview2 = { studentId: 'comsats', title: 'React' }
const score2: AssignPreview = {studentId: 'comsats', title: 'React'}





// Exclude and Extract


type AssignResults = Exclude<Assignment, 'grade' | 'verified'>

type AssignResults2 = Extract<Assignment, 'grade' | 'verified'>




// NonNullable


type AllPossibleGrades = "Dave" | "John" | null | undefined | "Comsats"

type ReallyAllPossibleGrades = NonNullable<AllPossibleGrades>






// ReturnType


type newAssign = { title: string; points: number }

type NewAssign = ReturnType<typeof newAssign>

const createNewAssign = (title: string, points: number): NewAssign => {
    return { title, points }
}


type NewMake = ReturnType<typeof makeSng>


const makeSng = (arg1: string, arg2: number) => {
    return { title: arg1, points: arg2, verified: true }    
}

const assign: NewMake = makeSng('React', 100)







type AssignParams = Parameters<typeof makeSng>


const assignParams : AssignParams = [ 'React', 100 ]



// Awaited 

type MyAwaited<T> = T extends Promise<infer U> ? U : never


    return (
        <div>Index</div>
    )
}
