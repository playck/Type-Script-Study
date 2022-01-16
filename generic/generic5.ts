class Person10<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person10("Mark", 39)
// new Person10<string>(39)

new Person10<string, number> ("Mark", 10)