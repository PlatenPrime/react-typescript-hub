import React from 'react'

import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

import { useState } from 'react'




export default function Index() {


const [count, setCount] = useState<number>(1)



    return (
        <>
            <Heading title="Hello World" />
            <Section title="Section">
                sigjierg
            </Section>
            <Counter  setCount={setCount}>Count is {count}</Counter>
            <List 
            items={[1, 2, 3]} 
            render={item => <div
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >{item}</div>} />

        </>
    )
}
