let z: number = 100;

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
    gender: string;
}

let person: Person = {
    name: 'Some Body',
    age: 33,
    gender: 'm'
};

let strings: string[] = pluck(person, ['name', 'gender']);

export class HelloWorld {
    protected prop01: string;
    
    constructor(inputStr: string){
        this.prop01 = inputStr;
    };

    public helloWorld(): string {
        z = 110; // mocha test: calling this function before addToZ() will cause function test to fail
        return `Hello World! ${this.prop01}`;
    }

    public addToZ(x: number, y: number): number {
        console.log(`strings: ${JSON.stringify(strings)}`);
        console.log(`person.name: ${person.name}`);
        console.log(`person[name]: ${person["name"]}`);
        return x + y + z;
    }
}

export default HelloWorld;