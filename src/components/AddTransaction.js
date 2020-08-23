import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
const [text , setText] = useState('');
const [amount , setAmount] = useState(0 );

const { addTrans } = useContext(GlobalContext);     //When destrutcturing, use the same name which you send, as defined in globalcontext

const onSub = e => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount             //here we are typecasting the amount wich was in string to int
    }
    
    addTrans(newTrans);

}

    return (
      <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSub}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </>
    )
}
