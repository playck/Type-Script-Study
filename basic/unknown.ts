declare const maybe: unknown

// 타입을 한정시켰을때 사용 할 수 있는것이 unknown
// any는 그냥 아무거나 다 할당 가능

if (maybe === 1) {
    const aNumber: number = maybe
}

if (maybe === true) { // 타입가드
    const aBoolean: boolean = maybe;

    // const aString:string = maybe
}

if (typeof maybe === 'string') {
    const aString: string = maybe;

    // const aBoolean: boolean = maybe
}