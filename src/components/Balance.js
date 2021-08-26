import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const balStyle = {
     display: 'flex',
     justifyContent: 'space-between',
 }


const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="balance" style={balStyle}>
          <div>
            <h4 id="bal">Your Balance</h4>
           <h1 id="balance">${total}</h1>
          </div>
        </div>
    );
} 


export default Balance;