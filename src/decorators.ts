//Decorator
function Logger(demo : Function){
    console.log('Logging- Person1')
    console.log(demo)
}

function template(template: string, hookId: string){
    return function(constructor: any){
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h2')!.innerHTML = p.name
        }
    }
}

@Logger
@template('<h1>Hello Typescript</h1> <h2></h2>', 'app')

class Person1 {
    name = 'Sammie Kei is finding typescript interesting'

    constructor(){
        console.log('Creating an object')
    }
}

const pers = new Person1()