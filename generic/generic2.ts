function helloBasic<T, U>(msg: T, comment: U): T {
    return msg
}

helloBasic<string, number>('jongjin', 32)

helloBasic(36, 32); // <T>가 추론됨