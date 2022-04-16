interface ThingsState {
    id: number
}

export type ThingsReducer = typeof thingsReducer

export const thingsReducer = (state: ThingsState[] = [], action: any) => {
    switch (action.type) {
        case 'things/add':
            return action.payload
        default:
            return state
    }
}