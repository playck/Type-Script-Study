function helloString(msg: string): string {
    return msg
}

function helloNumber(msg: number): number {
    return msg
}

// 타입 설정을 위한 함수가 반복적으로 생성됨..

function helloGeneric<T>(msg: T): T {
    return msg
}

helloGeneric('jongjin').length
helloGeneric(39)
helloGeneric(true)