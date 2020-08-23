import React ,{ useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IcnEx = () => {

  const { transaction } = useContext(GlobalContext);                //When destrutcturing, use the same name which you send, as defined in globalcontext
  const amount = transaction.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item) , 0).toFixed(2);
  const income = amount.filter(item => item>0).reduce((acc,item) => acc+=item, 0).toFixed(2);
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${income-total}</p>
        </div>
      </div>
    )
}
