import {createGreetingMessage, createGreetingMessageForDepartments, getNamesOfDepartmens, menType} from "./map";
import {FactoryType} from "./types";

let people: Array<menType> = []

beforeEach(() => {
    people = [{name: 'Sasha Ivanov', age: 30},
        {name: 'Petya Petrov', age: 20},
        {name: 'Vova Sidorov', age: 20},]

})
test('should get array of greeting message', () => {
    const message = createGreetingMessage(people)
    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Sasha')
    expect(message[1]).toBe('Hello Petya')
})
let factory: FactoryType
beforeEach(() => {
    factory = {
        title: 'Bars2',
        buildings: 5,
        id: 1,
        people: 500,
        address: {
            city: 'Moscow',
            country: 'Russia',
            street: 'Optikov'
        },
        departments: [
            {
                people: 10,
                rooms: 1,
                title: 'Office'
            }, {
                people: 25,
                rooms: 4,
                title: 'Managers'
            }, {
                people: 11,
                rooms: 5,
                title: 'Mechanics'
            }
        ]
    }
})
test('get all names of departments', () => {
    const titles = getNamesOfDepartmens(factory)
    expect(titles.length).toBe(3)
    expect(titles[0]).toBe('Office')
    expect(titles[1]).toBe('Managers')
    expect(titles[2]).toBe('Mechanics')
})
test('create greeting message for departments', () => {

    const greeting = createGreetingMessageForDepartments(factory.departments)

    expect(greeting.length).toBe(3);
    expect(greeting[0]).toBe('Hello Office')
    expect(greeting[1]).toBe('Hello Managers')


})