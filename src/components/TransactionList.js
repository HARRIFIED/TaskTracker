import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const h3Style ={
   marginBottom: '20px',
   marginTop: '30px',
   color: '#282c34',
   fontStyle: 'italic',
   
}



const TransactionList = () => {
   const {transactions} = useContext(GlobalContext)

    return (
        <>
           <h3 style={h3Style}>Transaction history</h3><hr/><br/>
           <ul>
             {transactions.map(transaction => (<Transaction  key={transaction.id}
               transaction = {transaction}/> ))}
           </ul>
        </>
    );
}

export default TransactionList