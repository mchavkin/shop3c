import * as actionTypes from './actions'
import {data} from "../data/data"

const initialState = {
    items: {},
    itemsInCart: 0,
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS: {
            const currentQuantity = state.items[action.item.id] ? state.items[action.item.id].qty : 0
            return {
                items: {
                    ...state.items,
                    [action.item.id]: {
                        qty: action.quantity + currentQuantity,
                        item: action.item
                    }
                },
                itemsInCart: state.itemsInCart + Number(action.quantity),
                total: state.total + action.item.price * action.quantity
            }
        }
        case actionTypes.REMOVE_ITEM: {
            const initialQty = action.item.qty
            let items = {...state.items}
            delete items[action.item.item.id]
            return {
                itemsInCart: state.itemsInCart - initialQty,
                total: state.total - initialQty*action.item.item.price,
                items: items
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