import userEvent from "@testing-library/user-event";

export type userType = {
    name: string
    age: number
    address: {
        city: string
    }
    school: SchoolType
}
export type SchoolType = {
    address: string
    houseNumber: number
    students: number
}

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


export const mvUser = (user:userType,city:string)=>{
    return {
        ...user,
        address:{
            ...user.address,
            city:city
        }
    }
}
