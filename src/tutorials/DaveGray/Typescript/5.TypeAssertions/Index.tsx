import React from 'react'

export default function Index() {



type One = string
type Two = string | number
type Three = 'hello'


let a: One = 'hello'
let b = a as Two
let c = a as Three
// let d = <One>'world'
// let d = <string | number>'world'



const addOrConcat = (a: number, b: number, c: 'add'| 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return "" + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string 
(10 as unknown) as string




// The DOM

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img') as HTMLImageElement
// const nextImg = <HTMLImageElement>document.getElementById('#img')


img?.src
myImg.src











    return (
        <div>Index</div>
    )
}
