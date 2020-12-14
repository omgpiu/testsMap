import {FactoryType} from "./types";
import {deleteDepartment, getBiggestDepartment} from "./filter";

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


test('delete department', () => {
    deleteDepartment(factory, 'Mechanics')

    expect(factory.departments.length).not.toBe(3)
    expect(factory.departments.length).toBe(2)
    expect(factory.departments[0].title).not.toBe('10')
    expect(factory.departments[0].title).toBe('Office')

})
test('get biggest department', () => {
    getBiggestDepartment(factory, 11)

    expect(factory.departments.length).not.toBe(3)
    expect(factory.departments.length).toBe(1)
    expect(factory.departments[0].people).toBe(25)
    expect(factory.departments[0].title).not.toBe('Office')
    expect(factory.departments[0].title).toBe('Managers')

})
test('filter old men', () => {
    const ages = [10, 20, 25, 33, 45, 80, 60]
    const oldPeope = ages.filter(e => e > 50)
    expect(ages.length).toBe(7)
    expect(oldPeope.length).toBe(2)
    expect(oldPeope[0]).toBe(80)
    expect(oldPeope[1]).toBe(60)

})
test('filter young men', () => {
    const ages = [10, 20, 25, 33, 45, 80, 60]
    const oldPeople = ages.filter(e => e < 50)
    expect(ages.length).toBe(7)
    expect(oldPeople.length).toBe(5)
})
test('find more popular framework', () => {
    const frameWorks = [
        {
            title: 'ReactJS',
            age: 5,
            people: 5000
        },
        {
            title: 'VueJs',
            age: 3,
            people: 2000
        },
        {
            title: 'Angular',
            age: 10,
            people: 1000
        },
    ]
    const popularFramework = frameWorks.filter(f => f.people > 1000)
    expect(popularFramework.length).toBe(2)
    expect(frameWorks.length).toBe(3)
    expect(frameWorks[0].age).toBe(5)
})
test('older framework', () => {
    const frameWorks = [
        {
            title: 'ReactJS',
            age: 5,
            people: 5000
        },
        {
            title: 'VueJs',
            age: 3,
            people: 2000
        },
        {
            title: 'Angular',
            age: 10,
            people: 1000
        },
    ]
    const popularFramework = frameWorks.filter(f => f.age > 5)
    expect(popularFramework.length).toBe(1)
    expect(popularFramework[0].age).toBe(10)
    expect(popularFramework[0].people).not.toBe(4)
    expect(popularFramework[0].people).toBe(1000)
})


export default 1;