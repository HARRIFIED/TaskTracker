import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//Initial state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //ACTIONS 
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:  id
        });
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:  transaction
        });       
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
         {children}
        </GlobalContext.Provider>
    );
}

