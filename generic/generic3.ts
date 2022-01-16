function helloArray<T>(msg: T[]): T {
    return msg[0]
}

helloArray(["Hello", "World"]);

helloArray(["Hello", 6])

function helloTuple<T,K>(msg: [T,K]): T {
    return msg[0]
}

helloTuple(["Hello", "World"])
helloTuple(["Hello", 5])
