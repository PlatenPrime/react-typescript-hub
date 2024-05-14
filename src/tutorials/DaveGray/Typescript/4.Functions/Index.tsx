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











    return (
        <div>Index</div>
    )
}
