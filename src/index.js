import React from 'react';
import ReactDOM  from 'react-dom';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Footer from './components/Footer';
import { GlobalProvider} from './context/GlobalState';
import './index.css'; 



const App = () => {
  return (
    <GlobalProvider >
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Footer />
      </div>
    </GlobalProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
