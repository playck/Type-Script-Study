function returnAny(message: any): any {
    console.log(message)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString()

// any는 계속해서 개체를 통해 전파되므로 타입의 안정성을 잃은 가능성이 있다.

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d

function leakingAny(obj: any) {
    const a = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});
c.indexOf("0")