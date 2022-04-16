interface ThingsState {
    id: number
}

export default (state: ThingsState[] = [], action: any) => {
    switch (action.type) {
        case 'things/add':
            return [action.payload,...state]
        default:
            return state
    }
}