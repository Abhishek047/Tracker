import React, { useContext }  from 'react'
import {TransactionItem}  from './TransactionItem'

import { GlobalContext } from '../context/GlobalState'

export const Transaction = () => {
const { transaction } = useContext(GlobalContext);            //When destrutcturing, use the same name which you send, as defined in globalcontext

    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transaction.map(transaction => (<TransactionItem  key={transaction.id} transaction={transaction}  /> ))}
        </ul>
        </>
  
    )
}
