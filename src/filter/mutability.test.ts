import {
    addingBooks,
    addNewBook,
    addNewBooks,
    addNewTeacher,
    changeCompanieAddress,
    changeCompaniePeople,
    changeHouses,
    changeStudents,
    changingAddress,
    deleteBook,
    moveUser,
    mvUser,
    updatePrice,
    userType
} from "./mutability";

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
            students: 1000,
            teachers: ['Petya,Vasya,Vova']
        },
        books: ['js', 'ts', 'css'],
        shoes: [{id: 1, price: 5000, title: 'Nike'}, {id: 2, price: 3000, title: 'Adidas'},
            {title: 'Puma', price: 3000, id: 3}
        ]
    }
})
export const increaseAge = (user: userType) => {
    return {
        ...user,
        age: user.age + 10
    }
}
test.skip('increase age', () => {

    const copyUser = increaseAge(user)
    expect(user.age).toBe(10)
    expect(copyUser.age).toBe(20)
})
test.skip('change city', () => {

    const newCity = moveUser(user, 'Chita')
    const nwCity = mvUser(user, 'Saint')
    expect(newCity.address.city).toBe('Chita')
    expect(nwCity.address.city).toBe('Saint')

})
test.skip('change school students', () => {

    const changedAmountOfStudents = changeStudents(user, 500)
    expect(changedAmountOfStudents.school.students).toBe(500)

})
test.skip('change amount of houses', () => {
    const newHouses = changeHouses(user, 5)
    expect(newHouses.school.houseNumber).toBe(5)
})
test.skip('change address', () => {
    const newAdress = changingAddress(user, 'optikov')
    expect(newAdress.school.address).toBe('optikov')
    expect(user.school.address).toBe('street')
})
test('add new teacher', () => {
    const newTeacher = addNewTeacher(user, 'Gena')
    expect(newTeacher.school.teachers.length).toBe(4)
    expect(user.school.teachers.length).toBe(3)
})
test.skip('add new book', () => {
    const newBook = addNewBook(user, 'Redux')
    expect(newBook.books.length).toBe(4)
    expect(newBook.books[3]).toBe('Redux')
})
test('update price for shoes', () => {
    const newPrice = updatePrice(user, 'Nike', 1000)

    expect(newPrice.shoes.length).toBe(3)
    expect(newPrice.shoes[0].price).toBe(1000)
})
test.skip('change name of shoes', () => {
    // const newTitle = updateTitle(user, 'Nike', 'Valenki')

    // expect(newTitle.shoes.length).toBe(3)
    // expect(newTitle.shoes[0].title).toBe('Valenki')
})
test.skip('add newnew book', () => {
    const newnewBook = addingBooks(user, 'html')
    expect(newnewBook.books.length).toBe(4)
    expect(newnewBook.books[3]).toBe('html')

})
test.skip('add array of books', () => {
    const newArr = addNewBooks(user, ['vue', 'angular', 'DOS'])

    expect(newArr.books.length).toBe(6);
    expect(newArr.books[3]).toBe('vue')


})
test('delete a book', () => {
    const withoutBook = deleteBook(user, 'css')
    expect(withoutBook.books.length).toBe(2)
    expect(withoutBook.books[1]).toBe('ts')
})
export let companies = {
    'Bars': [{id: 1, people: 500, address: 'Russia'}, {id: 2, people: 10000, address: 'World'}],
    'Adidas': [{id: 3, people: 20000, address: 'Germany'}]

}
test('update people', () => {

    const newPeople = changeCompaniePeople(companies, 1, 'Bars', 999999)
    expect(newPeople['Bars'][0].people).toBe(999999)
})
test('update address', () => {
    const newAddress = changeCompanieAddress(companies, 2, 'Bars', 'England')
    expect(newAddress['Bars'][1].address).toBe('England')
})