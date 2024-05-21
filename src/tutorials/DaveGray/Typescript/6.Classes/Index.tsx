import React from 'react'

export default function Index() {



    class Coder {

        secondLang!: string


        constructor(
            public readonly name: string,
            public music: string,
            private age: number,
            protected lang: string = "TypeScript"
        ) {
            this.name = name
            this.music = music
            this.age = age
            this.lang = lang
        }

        public getAge() {
            return `Hello, I am ${this.age}`
        }

    }

    const Platen = new Coder("Platen", "Rock", 42, "JavaScript")
    console.log(Platen.getAge());
    // console.log(Platen.lang);
    // Platen.lang = "TypeScript"
    // console.log(Platen.lang);




    class WebDev extends Coder {

        constructor(
            public computer: string,
            name: string,
            music: string,
            age: number
        ) {
            super(name, music, age)
            this.computer = computer
        }


        public getLang() {
            return `I write ${this.lang}`
        }

    }


    const Prime = new WebDev("Macbook", "Prime", "Rock", 42)
    console.log(Prime.getLang());
    console.log(Prime.getAge());




    interface Musician {
        name: string,
        instrument: string,
        play(action: string): string
    }


    class Guitarist implements Musician {
        name: string
        instrument: string


        constructor(
            name: string,
            instrument: string
        ) {
            this.name = name
            this.instrument = instrument
        }


        play(action: string) {
            return `${this.name} ${action} the ${this.instrument}`
        }
    }


    const Coda = new Guitarist("Coda", "Guitar")
    console.log(Coda.play("plays"))





    class Peeps {
        static count: number = 0

        static getCount(): number {
            return Peeps.count
        }

        public id: number

        constructor(public name: string) {
            this.name = name
            this.id = ++Peeps.count
        }

    }



    const John = new Peeps("John")
    const Steve = new Peeps("Steve")
    const Plate = new Peeps("Plate")


    console.log(Peeps.getCount());
    console.log(John.id, Steve.id, Plate.id);
    console.log(Peeps.count);



    class Bands {

        private dataState: string[] = []

        constructor() {
            this.dataState = []
        }




        public get data(): string[] {
            return this.dataState.map(el => el.toUpperCase())
        }


        public set data(value: string[]) {
            if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
                this.dataState = value
                return
            } else {
                throw new Error('param is not an array of strings')
            }
        }
    }


    const MyBands = new Bands()
    MyBands.data = ["Platen", "Prime", "Coda"]
    console.log(MyBands.data);
    MyBands.data = ["Platen", "Prime", "Coda", "Rock", "Metal"]
    console.log(MyBands.data);
    





    return (
        <div> Index</div >
    )
}
