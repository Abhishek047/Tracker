import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionItem = ({ transaction}) => {

    const { deleteTrans } = useContext(GlobalContext);     //When destrutcturing, use the same name which you send, as defined in globalcontext

    return (
        <li className={transaction.amount > 0 ? "plus" : "minus" }>
            {transaction.text} <span>{transaction.amount > 0 ? '' : '-' }$ {Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTrans(transaction.id)} className="delete-btn" >x</button>
        </li>
    )
}
