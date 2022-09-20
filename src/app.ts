//Generics
// const promise : Promise<string> = new Promise((reject, resolve) => {
//     setTimeout(() => {
//         resolve('Testing...')
//     }, 2000);
// })

//Generics function
function merge<T extends object, U extends object>(objA: T, objB: U)  {
    return Object.assign(objA, objB);
}

const merged = merge({name: 'Sammie', hobbies: ['drumming', 'dancing', 'coding', 'eating']}, {age : 30})

console.log(merged.hobbies)

interface Lenghty {
    length: number
}
function countAndDescribe<T extends Lenghty> (elements : T) : [T, string] {
    let descriptionText = 'Got no length'
    if(elements.length === 1){
        descriptionText = 'Got 1 element'
    } else if (elements.length > 1){
        descriptionText =  `The length is ${elements.length} elements`
    }
    return [elements, descriptionText]
}

console.log(countAndDescribe(''))

function extractAndConvert<T extends object, U extends keyof T>(obj : T , key : U){
    return obj[key]
}

console.log(extractAndConvert({name: 'sammie', age: 30}, 'age'))

//Generics Class
class dataStorage <T> {
    private data : T[] = []

    addItems(item : T){
        this.data.push(item)
    }

    removeItems(item : T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new dataStorage<string>()

textStorage.addItems('Sam') 
textStorage.addItems('Kamal') 
textStorage.addItems('Alice Ayomide') 
textStorage.removeItems('Sam') 

console.log(textStorage.getItems())

const numberStorage = new dataStorage<number>()

numberStorage.addItems(1) 
numberStorage.addItems(5) 
numberStorage.addItems(8) 
numberStorage.removeItems(1) 

console.log(numberStorage.getItems())

//PArtial Generic Types
interface CourseGoal {
    title: string,
    description: string,
    createdDate: Date
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
){
    let courseGoal : Partial<CourseGoal> = {}
    courseGoal.title = title,
    courseGoal.description = description,
    courseGoal.createdDate = date
    return courseGoal 
}

// console.log(createCourseGoal('A demo intro', 'FOr you to be the best'))

//Readonly Generic Types
let names: Readonly<string[]> = ['Sam', 'Chidera Favour', 'Felicity']

// names.push('Dammy')
