import {DepartmentsType, FactoryType} from "./types";

export type workersType = {
    name: string
    age: number
    salary: number
}
const worker: Array<workersType> = [
    {name: 'Sasha', age: 25, salary: 150},
    {name: 'Vova', age: 30, salary: 250},
    {name: 'Serega', age: 44, salary: 350},
    {name: 'Ivan', age: 55, salary: 550},
]
export type menType = {
    name: string
    age: number
}
const people = [{name: 'Sasha Ivanov', age: 30},
    {name: 'Petya Petrov', age: 20},
    {name: 'Vova Sidorov', age: 20},]
const dimychTrans = (man: menType) => {
    return {
        stack: ['js', 'css', 'react', 'tdd'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}
const devs = [
    {
        stack: ['js', 'css', 'react', 'tdd'],
        firstName: 'Sasha',
        lastName: 'Ivanov'
    }, {
        stack: ['js', 'css', 'react', 'tdd'],
        firstName: 'Petya',
        lastName: 'Petrov'
    }, {
        stack: ['js', 'css', 'react', 'tdd'],
        firstName: 'Vova',
        lastName: 'Sidorov'
    },
]

const devs2 = [
    dimychTrans(people[0]),
    dimychTrans(people[1]),
    dimychTrans(people[2])
]

const devs3 = people.map(dimychTrans)
const devs4 = people.map(man => ({
        stack: ['js', 'css', 'react', 'tdd'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })
)

export const createGreetingMessage = (people: Array<menType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}`)
}
export const getNamesOfDepartmens = (factory: FactoryType) => {
    return factory.departments.map(d => d.title)

}
export const createGreetingMessageForDepartments = (deparment: Array<DepartmentsType>) => {
    return deparment.map(d => `Hello ${d.title}`)
}






