import React ,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const { transaction } = useContext(GlobalContext);                  //When destrutcturing, use the same name which you send, as defined in globalcontext
    const amount = transaction.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item) , 0).toFixed(2);           //reduce function kaise karta hai
    return (
        <>
        <h4>Your Balance</h4>
        <h1> ${total}</h1>
        </>
    )
}
