import React, {useContext} from 'react';
import { GlobalContext  } from '../context/GlobalState';


const l1Style={
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   
};

const buttonStyle ={
  display: 'inline-block',
  background: '#000',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '15px',
  fontFamily: 'inherit',
  backgroundColor: 'red',
};



export const Transaction = ( { transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";
    return (
        <li className = {transaction.amount > 0 ? "Hplus" : "Hminus"} style={l1Style}>
                {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)}</span>
                <button 
                 className="delete" 
                 style={buttonStyle}
                 onClick={() => deleteTransaction(transaction.id)}>
                  x
                </button>
        </li>
    );
}