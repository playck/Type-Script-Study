interface Person1 {
    name: string;
    age: number;
}


interface Person2 {
    name: string;
    age?: number;
}

interface Person3 {
    name: string;
    age?: number;
    [index: string]: any // 어떤 이름의 프로퍼티가 와도 괜찮음
}


function hello2(person: Person2): void {
    console.log(`hi ${person.name}`)
}

hello2({name: "Makr", age: 39})
hello2({name: "Anna"})

function hello3(person: Person3): void {
    console.log(`hi ${person.name}`)
}

const p31: Person3 = {
    name: 'Mark',
    age: 20,
}

const p32: Person3 = {
    name: "Anna",
    systers: ['Sung', "Chan"]
}

const p33: Person3 = {
    name: 'jongjin',
    father: p31,
    mother: p32
}

hello3(p33)