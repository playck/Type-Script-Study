interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: '김종진',
    city: '서울',
    age: 32
}

HTMLDivElement