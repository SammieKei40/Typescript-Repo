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