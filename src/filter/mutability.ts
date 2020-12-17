export type userType = {
    name: string
    age: number
    address: {
        city: string
    }
    school: SchoolType
    books: Array<string>
    shoes: Array<ShoesType>
}
export type ShoesType = {
    id: number
    title: string
    price: number
}
export type SchoolType = {
    address: string
    houseNumber: number
    students: number
    teachers: Array<string>
}
export type companiesType = {}


export const moveUser = (user: userType, city: string) => {
    const copy = {
        ...user,
    }

    copy.address = {
        ...copy, city: city
    }
    return copy
}
// export const mvUr = (user: userType, city: string) => {
//     return {
//         ...user,
//         address: {
//             ...user.address,
//             city: city
//         }
//
//     }
// }

export const changeStudents = (user: userType, students: number) => {

    return {
        ...user,
        school: {
            ...user.school,
            students: students
        }
    }
}


export const mvUser = (user: userType, city: string) => {
    return {
        ...user,
        address: {
            ...user.address,
            city: city
        }
    }
}

export const changeHouses = (user: userType, houses: number) => {
    return {
        ...user,
        school: {
            ...user.school,
            houseNumber: houses
        }
    }


}
export const changingAddress = (user: userType, street: string) => {
    return {
        ...user,
        school: {
            ...user.school,
            address: street
        }
    }
}

export const addNewTeacher = (user: userType, newTeacher: string) => {
    return {
        ...user,
        school: {
            ...user.school,
            teachers: [newTeacher, ...user.school.teachers]
        }
    }
}
// export const addNewBook = (user: userType, newBook: string) => {
//     return {
//         ...user,
//         books: [...user.books, newBook]
//     }
// }
// export const updatePrice = (user: userType, title: string, newPrice: number) => {
//     return {
//         ...user,
//         shoes: user.shoes.map(el => el.title === title ? {...el, price: newPrice} : el)
//     }
// }
// export const updateTitle = (user: userType, title: string, newTitle: string) => {
//     return {
//         ...user,
//         shoes: user.shoes.map(el => el.title === title ? {...el, title: newTitle} : el)
//     }
// }
export const addingBooks = (user: userType, newNewBook: string) => {
    return {
        ...user,
        books: [...user.books, newNewBook]
    }
}
export const updatePrice = (user: userType, title: string, newPrice: number) => {
    return {
        ...user,
        shoes: user.shoes.map(el => el.title === title ? {...el, price: newPrice} : el)
    }
}
export const addNewBook = (user: userType, newBook: string) => {
    return {
        ...user,
        books: [...user.books, newBook]
    }
}
export const addNewBooks = (user: userType, newBooks: Array<string>) => {
    return {
        ...user,
        books: [...user.books, ...newBooks]
    }
}
export const deleteBook = (user: userType, title: string) => {
    return {
        ...user,
        books: user.books.filter(el => el !== title)
    }
}
export const changeCompaniePeople = (company: any, companyId: number, companyTitle: string, people: number) => {
    let copy = {...company}
    copy[companyTitle] = copy[companyTitle].map((el: any) => el.id === companyId ? {
        ...el, people: people
    } : el)
    return copy
}
export const changeCompanieAddress = (company: any, companyId: number, companyTitle: string, newAddress: string) => {
    let copy = {...company}
    copy[companyTitle] = copy[companyTitle].map((el: any) => el.id === companyId ? {...el, address: newAddress} : el)
    return copy
}
