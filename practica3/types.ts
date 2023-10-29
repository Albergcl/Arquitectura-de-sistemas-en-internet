export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin,
    location: Location
    created: Date
}

type Origin = {
    name: string
}

export type Location = {
    id: number,
    name: string,
    type: string,
    dimension: string,
    created: Date
}

export type Info = {
    count: number,
    pages: number,
    next: null | string,
    prev: null | string
}

export type RootC = {
    info: Info,
    results: Character[]
}

export type RootL = {
    info: Info,
    results: Location[]
}