interface HelloPerson {
    (name: string, age?: number): void
}

const helloPerson: HelloPerson = (name: string) => {
    console.log(`hi ${name}`)
}

helloPerson("jongjin", 32)