import React from 'react'

export default function Index() {



    type StringOrNumber = string | number

    type StringOrNumberArray = StringOrNumber[]

    type Person = {
        name?: string
        age?: (number | string)[]
        isAdmin: boolean
        albums?: StringOrNumberArray
    }


    type UserId = StringOrNumber


    type PostId = StringOrNumber


    let myName: "Platen"

    let username: "Platen" | "Prime" | "Coda"


    username = 'Andy'



    // functions

    const add = (a: number, b: number): number => {
        return a + b
    }

    const logMsg = (message: any): void => {
        console.log(message)
    }


    logMsg('Hello')
    logMsg(add(3, 5))
    logMsg(add("a", 5))




    const subtract = function (a: number, b: number): number {
        return a - b
    }


    type mathFunction = (a: number, b: number) => number
    // interface mathFunction {
    //     (a: number, b: number): number
    // }


    const multiply: mathFunction = function (a, b) {
        return a * b
    }

    logMsg(multiply(3, 5))


    // optional parameters

    const addAll = (a: number, b: number, c?: number): number => {
        if (typeof c !== 'undefined') {
            return a + b + c
        }
        return a + b
    }


    const sumAll = (a: number, b: number, c: number = 2): number => {
        return a + b + c
        
    }


    logMsg(sumAll(1, 2, 3))
    logMsg(sumAll(1, 2))
    logMsg(addAll(1, 2))
    logMsg(addAll(1, 2, 3))








// rest parameters

const total = (...nums: number[]): number => {
    return nums.reduce((a, b) => {
        return a + b
    })
}



logMsg(total(1, 2, 3, 5, 89))



const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
let i = 1
    while (true) {
        i++
    if (i > 10) {
        break
    }
    }
}   

const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
}


const numberOrString = (a: number | string): string => {
    if (typeof a === 'string') {
        return a
    }
    if (isNumber(a)) {
        return "number"
    }
    return createError("Error")
}



    return (
        <div>Index</div>
    )
}
