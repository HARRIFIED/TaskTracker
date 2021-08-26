import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const h3Style = {
  color: '#282c34',
  marginTop: '30px',
}
const lStyle ={
   marginBottom: '20px',
   color: '#282c34',
}
const btnStyle = {
  
}

const amountStyle = {
  color: '#282c34',
}




const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
    id: Math.floor(Math.random() * 100000),
    text,
    amount: + +amount
  }

  addTransaction( newTransaction)
}

  
  
    return (
        <>
          <h3 style={h3Style}>Add new transaction</h3>
          <form onSubmit={onSubmit}>
             <div className="form-control">
               <label htmlFor="text" style={lStyle} >Text</label>
               <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
             </div>
             <div className="form-control">
               <label htmlFor="amount" style={amountStyle}
                 >Amount <br />
                 (negative - expenses, positive - income)
               </label>
               <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
             </div>
             <button className="btn" style={btnStyle}>Add transaction</button>
          </form>
        </>
    );
}

export default AddTransaction;

