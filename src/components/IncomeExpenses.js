import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  //getting the transactions from the context
  const {transactions} = useContext(GlobalContext);
 //getting the amounts
  const amounts = transactions.map(transaction => transaction.amount);
  //getting the total amount

  
  // geting income
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  //getting expenses 
  const expenses = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    .toFixed(2);

  return (
      <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">${income}</p>
        </div> 
        <div>
            <h4>Expenses</h4>
            <p id="money-minus" className="money minus">${expenses}</p>
        </div>
      </div>
  );
}

export default IncomeExpenses;