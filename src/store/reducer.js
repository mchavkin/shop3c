import * as actionTypes from './actions'
import {data} from "../data/data"

const initialState = {
    // items: {},
    itemsInCart: 0,
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.ADD_ITEMS: {
        //     const items = {...state.items, [action.id]: (state[action.id] || 0) + Number(action.quantity)}
        //     const totals = calcTotal(items)
        //     return {items, ...totals}
        // }
        case actionTypes.ADD_ITEMS: {
            return {
                itemsInCart: state.itemsInCart + Number(action.quantity),
                total: state.total + action.item.price * action.quantity
            }
        }
        default:
            return state
    }
}

function calcTotal(items) {
    const totalItems = Object.values(items).reduce((sum, quant) => sum + quant)
    const total = Object.entries(items)
        .reduce((sum, [id, quant]) => sum + Number(data.products.find(p => id === p.id).price) * quant, 0)
    return {
        itemsInCart: totalItems,
        total: total
    }
}

export default reducer