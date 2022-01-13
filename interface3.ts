interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41:Person4 = {
    name: "Mark",
    age: 39,
    hello: function(): void {
        console.log(`hi ${this.name}`)
    }
}

const p42:Person4 = {
    name: "Mark",
    age: 39,
    hello(): void {
        console.log(`hi ${this.name}`)
    }
}


// const p43:Person4 = {
//     name: "Mark",
//     age: 39,
//     // hello: (): void => {
//     //     console.log(`hi ${this.name}`) // arrow function은 this 사용 불가 (block 안에서)
//     // }
// }

p41.hello()
p42.hello()