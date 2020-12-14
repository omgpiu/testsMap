export type FactoryType = {
    title: string
    people: number
    id: number
    buildings: number
    address: {
        country: string
        city: string
        street: string
    }
    departments: Array<DepartmentsType>
}

export type DepartmentsType = {
    title: string
    people: number
    rooms: number

}

 type WorkerType = {
    name: string
    age: number
    salary: number
}



