//Interface: Allow us to define a structure of an object
interface Greetable {
   readonly name: string,
    age: number,

     greet (phrase : string) : void 
}

//Using Interface as a functions types
interface Addfn {
    (a: number , b : number) : number
}

let Add : Addfn;

Add = (n1: number, n2: number) => {
    return +n1 + +n2
}

console.log(Add(23,45))

//Using Interfaces with Classes
class Person implements Greetable {
    name: string;
    age = 23

    constructor(n: string){
        this.name = n
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name} ${phrase} ${this.age} years old`)
    }
}

let user : Greetable

user = new Person('Sammie Kei')


// user = {
//     name : 'Sammie Kei',
//     age: 23,
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name} ${phrase} ${this.age} years old`)
//     }
// }

 user.greet('Im')