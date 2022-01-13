interface Person1 {
    name: string;
    age: number
}


function hello1(person: {name: string; age: number} ): void {
    console.log(`hI ${person.name} 입니다.`)
}

const p1: Person1 = {
    name: "Mark",
    age: 39
}

hello1(p1)