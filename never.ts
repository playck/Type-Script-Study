function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error("failed")
}

function infiniteLoop(): never {
    while(true) {}
}

// never에는 어떤 것도 any 조차 할당이 불가

declare const a:  string | number

// typeof 가드
if(typeof a !== 'string') {
    a;
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never

type ObjectIndexable = Indexable<{}>;

// const b: Indexable<{}> = '';