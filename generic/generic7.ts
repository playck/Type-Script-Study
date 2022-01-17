interface Iperson7 {
    name: string;
    age: number;
}

const person7: Iperson7 = {
    name: 'jongjin',
    age: 32
}

// function getProp(obj: Iperson7, key: "name" | "age"): string | number {
//     return obj[key];
// }

// function setProp(obj: Iperson7, key: "name" | "age", value: string | number):void {
//     obj[key] = value
// }

//obj[key]가 name이면 string , age면 number이기 때문에 표현이 어렵고 return 값의 오차가 생길수 있다.

type Keys = keyof Iperson7;

// 어떤 개체에 keyof를 붙이면 결과물이 타입으로 나오는데 key의 이름(문자열)로 만들어진다.

const keys: Keys = "age";

// function getProp(obj: Iperson7, key: keyof Iperson7): Iperson7[keyof Iperson7] {
//     return obj[key];
// }

// Iperson7[keyof Iperson7] => IPerosn["name" | "age"] => IPerson["name"] | IPerson["age"]
//  => string | number

function getProp<T, K extends keyof T>(obj: T, key:  K): T[K] {
    return obj[key];
}

getProp(person7, 'name')

// 조건부 타이핑으로 심화된 타입스크립트 코드 작성이 가능!