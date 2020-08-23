import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initaial 
const initialState = {
    transactions: [
    {id: 1, text:"Cash", amount: 200},
    {id: 2, text:"Drinks", amount: -20},
    {id: 3, text:"Salary", amount: 500}
    ]
}

// create Context

export const GlobalContext = createContext(initialState);

// Provider Component (Where we wanna give our states to provide)

export const GlobalProvider = ({ children }) => {

//Actions(Perform function on the data)
                

    //Delete


function deleteTrans(id) {
    dispatch({
        type: "DEL_TRANS",
        payload: id
    });
}

    //Add Trans

function addTrans(transaction) {
    dispatch({
        type: "ADD_TRANS",
        payload: transaction
    });
}
    
const [state,dispatch] = useReducer(AppReducer, initialState);

return ( <GlobalContext.Provider value={{           //transactions is the name of state passed
    transaction: state.transactions, 
    deleteTrans   ,
    addTrans                                  //transaction is the name of the parameter passed which can be recived byt this name
}}>
    {children}
</GlobalContext.Provider>
)

}