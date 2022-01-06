// let MyName: string = null // tsconfig strict: false 시 에러 안남

let v: void = undefined;

let union: string | null = null;

union = "Mark"



// null은 런타임에서 typeof 연산자를 이용해서 보면 object임

let n: null = null;

console.log(n);
console.log(typeof n); // object

// undefined은 런타임에서 typeof 연산자를 이용해서 보면 undefined

let u: undefined = undefined

console.log(u)
console.log(typeof u) // undefined