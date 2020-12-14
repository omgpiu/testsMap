import {FactoryType} from "./types";

export const mam = 10
export type FrameWorksType = {
    title: string
    age: number
    people: number
}
export const deleteDepartment = (factory: FactoryType, title: string) => {
    factory.departments = factory.departments.filter(e => e.title !== title)
}
export const getBiggestDepartment = (factory: FactoryType, people: number) => {
    factory.departments = factory.departments.filter(p => p.people > people)
}