const INITIAL_STATE = {
    id: '',
    date: '',
    name: '',
    stock: '',
    category: '',
    price: '',
    status: ''
}

// yg dimasukkan ke redux yg hanya akan dipakai saja.

export const prodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADMIN' :
            return {
                ...state,
                id: action.payload.id,
                date: action.payload.date,
                name: action.payload.name,
                stock: action.payload.stock,
                category: action.payload.category,
                price: action.payload.price,
                status: action.payload.status,
            }
        default :
            return state
    }            
}