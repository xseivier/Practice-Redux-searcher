import {type as findCurrentItemType} from '../actions/findCurrentItems'

import items from '../../data/items'

const defaultState = {};

function reducer(state= defaultState, {type, payload}){
    switch (type) {
        case findCurrentItemType: {
            return items.find(n => n.id ===payload)
        }
        default :
            return state
    }
}

export default reducer