import {changeStudents, moveUser, mvUser, userType} from "./mutability";

let user: userType;
beforeEach(() => {
    user = {
        name: 'sasha',
        age: 10,
        address: {
            city: 'Moscow'
        },
        school: {
            address: 'street',
            houseNumber: 10,
            students: 1000

        }
    }
})


export const increaseAge = (user: userType) => {
    return {
        ...user,
        age: user.age + 10
    }
}


test('increase age', () => {

    const copyUser = increaseAge(user)
    expect(user.age).toBe(10)
    expect(copyUser.age).toBe(20)
})
test('change city', () => {

    const newCity = moveUser(user, 'Chita')
    const nwCity = mvUser(user, 'Saint')
    expect(newCity.address.city).toBe('Chita')
    expect(nwCity.address.city).toBe('Saint')

})
test('change school students', () => {

    const changedAmountOfStudents = changeStudents(user, 500)
    expect(changedAmountOfStudents.school.students).toBe(500)

})