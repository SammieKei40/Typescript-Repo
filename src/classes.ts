//Abstract: it can be used if you wanna enforce all methods share the same properties
abstract class Department {
    // name: string;
    //id : string
  protected  employee: string[] = []

    constructor (protected readonly id : string , public readonly name : string) {
        // this.name = n
    }

    //Static Methods
    static createEmployer(name: string){
        return {name : name}
    }

   abstract describe(this: Department) : void 
     // console.log(`Department ${this.id} : ${this.name}`)
    

    addEmployer(employees : string){
        this.employee.push(employees)
    }

    printEmployer(){
        console.log(this.employee.length)
        console.log(this.employee)
    }
}

//Inheritance
class ITdepartment extends Department {
    private admins : string[]
    constructor(id : string, admins : string[]){
        super(id, 'IT')
        this.admins = admins
    }

    describe(){
        console.log('IT Department ID:' + this.id)
    }
}

class Mathematics extends Department {
  private lastReport  : string
  private static instance : Mathematics

  //Getters : Trying to read a properties 
  get mostrecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error ('No records found')
    }

    //Setters: Trying to set a properties
    set mostrecentReport(value : string){
        if(!value){
            throw new Error('Please set new valid value')
        }
        this.addReport(value)
    }

  private constructor(id: string, private reports : string[]){
        super(id, 'Mathematics')
        this.lastReport = reports[0]
    }

    addEmployer(name: string): void {
        if(name === 'Sammie'){
            return
        }
        this.employee.push(name)
    }
    addReport(text : string){
        this.reports.push(text)
        this.lastReport = text
    }

    static getInstance(){
        if(Mathematics.instance){
            return this.instance
        }
        this.instance = new Mathematics('d3', [])
        return this.instance
    }

    describe(){
        console.log('Mathematics Department ID:' + this.id)
    }

}

console.log(Department.createEmployer('Lekan'))
const it = new ITdepartment('id2', ['Sammie'])
const maths =  Mathematics.getInstance()
maths.addReport('HEyyy it is a new record')
maths.mostrecentReport = 'Another new records'
console.log(it)
console.log(maths)
// it.describe()

it.addEmployer('Sammie')
it.addEmployer('Kamal')
it.addEmployer('MOG')
it.addEmployer('Jude')
maths.addEmployer('Iyanu')
maths.addEmployer('Moses')
maths.addEmployer('Sammie')
maths.describe()
it.describe()
//it.printEmployer()

