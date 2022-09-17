// Data type : number, string, boolean
function add(n1: number, n2: number, result: string, value: boolean){
   if(value === true){
    return n1 + n2 + result
   } else {
    alert('Oops! You look awesome')
   }
}

const num1 = 5
const num2 = 6
const phrase = ' is a number'
const value = true

console.log(add(num1, num2, phrase, value));

//Data type: Enum
enum Role {ADMIN = 'Ikeja Clubbing Center', READ_ONLY = 'Ikorodu CLub', AUTHOR = 'Marina CLub'}

const club = {
    party: Role.ADMIN
}
console.log(club.party)

//Data type: Object, Arrays, Tuples, Any
//num1: number | string | boolean = Union Type
const person: {
    Name: string,
    Age: number,
    Hobbies: string[], //Arrays
    role: [number , string], //TUples
    cars: any[] //Any types
}  = {
    Name: "Samuel",
    Age: 23,
    Hobbies: ['Drumming', 'Eating', 'Coding', 'Smiling', 'Love Breast'],
    role: [10, 'Sammie'],
    cars: [1, 'Toyota', 2, 'Bugatti', 3, 'Range Rover', true]
}

person.role.push('admin')
// console.log(person)
// console.log(person.Name)

for(const Hobby of person.cars){
    console.log(`Sammie loves ${Hobby}`)
}

//Types Alias: We can create our own types which aren't present in Javscript
type Combaniable = number | string 

function combine (
    input1 : Combaniable,
    input2: Combaniable
){
     if(typeof input1 === 'number' && typeof input2 === 'number'){
        return +input1 + +input2
    } else {
        return input1.toString() + input2.toString();

    }
}

console.log(combine(23, 54)) 

type User = { name: string; age: number };
const u1: User = { name: 'Sammie', age: 23 }

function greet(u1: User) {
  console.log('Hi, I am ' + u1.name);
}

function isOlder(u1: User, checkAge: number) {
  return checkAge > u1.age;
}

greet(u1)
console.log(isOlder(u1, 67))
