import { useReducer } from "react"

export type CartItemType = {
    artikul: string
    marker: string
    namerus: string
    nameukr: string
    zone: string
    qty: number
}


type CartStateType = {cart: CartItemType[]}


const initCartState: CartStateType = {cart: []}


const REDUCER_ACTION_TYPE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    QUANTITY: 'QUANTITY',
    SUBMIT: 'SUBMIT',
 
}


export type ReducerActionType  = typeof REDUCER_ACTION_TYPE


export type ReducerAction = {
    type: string    
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('Action payload missing in ADD action')
            }   
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.artikul === action?.payload?.artikul
            )
            if (itemIndex < 0) {
                state.cart.push({ ...action.payload, qty: 1 })
            } else {
                const newState = state.cart.map((cartItem, index) => {
                    if (index === itemIndex) {
                        return { ...cartItem, qty: cartItem.qty + 1 }
                    }
                    return cartItem
                })
                state.cart = newState
            }
            return { ...state }
        }   
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('Action payload missing in REMOVE action')
            }   
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.artikul === action?.payload?.artikul   
            )
            if (itemIndex < 0) {
                throw new Error('Item not found in cart. Cannot remove')
            }
            if (state.cart[itemIndex].qty > 1) {
                const newState = state.cart.map((cartItem, index) => {
                    if (index === itemIndex) {
                        return { ...cartItem, qty: cartItem.qty - 1 }
                    }
                    return cartItem
                })
                state.cart = newState
            } else if (state.cart[itemIndex].qty === 1) {
                const newState = state.cart.filter(
                    (cartItem, index) => index !== itemIndex
                )
                state.cart = newState
            }
            return { ...state }
        }   
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('Action payload missing in QUANTITY action')
            }   
            const itemIndex = state.cart.findIndex(
                (cartItem) => cartItem.artikul === action?.payload?.artikul       
            )
            if (itemIndex < 0) {
                throw new Error('Item not found in cart. Cannot update quantity')
            }
            state.cart[itemIndex].qty = action.payload.qty
            return { ...state }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}


const useCartContext = (initCartState: CartStateType) => {
   const [state, dispatch] = useReducer(reducer, initCartState) 

   const REDUCER_ACTIONS = REDUCER_ACTION_TYPE
   const { ADD, REMOVE, QUANTITY, SUBMIT } = REDUCER_ACTIONS
   const totalItems = state.cart.reduce((accumulator, cartItem) => accumulator + cartItem.qty, 0)
}