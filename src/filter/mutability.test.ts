import {userType} from "./mutability";

export const increaseAge = (user: userType) => {
    return {
        ...user,
        age: user.age + 10
    }
}


test('increase age', () => {
    let user: userType = {
        name: 'sasha',
        age: 10,
        address: {
            city: 'Moscow'
        }
    }
    const copyUser = increaseAge(user)
    expect(user.age).toBe(10)
    expect(copyUser.age).toBe(20)
})
