interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name
    }

    hello(): void {
        console.log(`hi ${this.name}`)
    }
}

const person: IPerson1 = new Person('jongjin');

person.name
person.hello()

// 외부로는 interface만 노출하고 내부적으로 class를 구현할 수 있다.