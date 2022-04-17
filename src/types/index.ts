export interface Customer {
    id: number
}

export interface Thing {
    id: number
}

export interface Contract {
    id: number,
    customerId: number,
    thingId: number
}