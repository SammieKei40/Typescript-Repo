type Admin  = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    date: Date
}

type upgradeEmployee = Admin & Employee // Intersection types

const user1 : upgradeEmployee =  {
    name: 'Sammie',
    privileges: ['Created an employer'],
    date: new Date()
}

console.log(user1)

type Combinable = string | number
type Numeric = number | boolean  // Union Types

type Universal = Combinable & Numeric

function add1(a: number, b: string) : string; //Functions Overload
function add1(a: string, b: string) : string;
function add1(a: number, b: number) : string;
function add1(a: Combinable, b: Combinable){
    if(typeof a == 'string' || b == 'string'){  //Type Guards
        return a.toString() + b.toString()
    }
    return +a + +b
}

console.log(add1('Sammie','Kei'))


interface Bird {
    type : 'bird',
    flyingSpeed: number
}

interface Horse {
    type: 'horse',
    runningSpeed: number
}

type Animal = Bird | Horse

function AnimalSpeed(animal: Animal){
    let speed;
    switch (animal.type){  //Discriminated Unions types
        case 'bird':
            speed = animal.flyingSpeed
        break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving at the speed :' + speed)
}

AnimalSpeed({type: 'bird', flyingSpeed: 12})

const paragraph = document.getElementById('p')! as HTMLInputElement; // Type casting

paragraph.innerHTML = 'Hey there! Im currently learning Typescript'


//Index Properties
type ErrorContainer = {
    [prop : string] : string
}

const ErrorBag : ErrorContainer = {
    email : 'Invalid Email',
    password : 'Password wrong'
}

console.log(ErrorBag)