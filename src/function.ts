// Function types
function ad(n1: number, n2: number){
    return +n1 + +n2
}

function printResult(num: number) : void {
    console.log(num)
}

printResult(ad(8,19))

let combineValues : (a: number, b: number) => number; //function types
combineValues = ad
console.log(combineValues(75678,75))

const personName = {
    firstname: 'Sammie',
    age: 40
}

const copiedpersonName = {...personName}

console.log(copiedpersonName)


const added = (...number: number[]) => {
    return number.reduce((curVal, curNum) => {
        return curVal + curNum
    }, 0)
}

console.log(added(5,6,7,8,9,1009,))

const {firstname, age} = personName
console.log(firstname, age)