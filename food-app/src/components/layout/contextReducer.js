import React, { createContext, useContext, useReducer } from 'react'
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) => {
switch(action.type) {
    case 'ADD':
        return [...state,{}]
        default:
            console.log("Error in reducer")
}
}

export const CardProvider = ({children}) => {
const[state, dispatch] = useReducer(reducer, [])
    return (
<CartStateContext.Provider value={dispatch}>
<CartDispatchContext.Provider value={state}>
    {children}
</CartDispatchContext.Provider>
</CartStateContext.Provider>
)
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);