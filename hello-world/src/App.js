import React,{useState} from 'react'
import {Typography,styled,Box} from '@mui/material';
import Balance from './ExpenseTracker/Balance';
import Expensecard from './ExpenseTracker/Expensecard';
import NewTransaction from './ExpenseTracker/NewTransaction';
import Transaction from './ExpenseTracker/Transaction';
import './App.css';


const Header= styled(Typography)`
text-align:center;
 font-size:36px;
 color:blue;
 text-transform:uppercase;
`
const Component=styled(Box)`
  background: #fff;
  width:800px;
  padding:10px;
  display:flex;
   margin:auto;
  border-radius:20px;
  & > div{
      height: 70 vh;
      width:50%;
      padding: 10px;
  }
  display:flex;
`
function App() {
   const [transaction,settransaction]=useState([
    {id:1, text:'Momos', amount:-20},
    {id:2, text:'Pizza', amount:-30},
    {id:3, text:'Bonus', amount:30},
    {id:4, text:'Salary', amount:400},
  ]);

  return (
    <Box className='App'>
        <Header>Expense Tracker</Header>
         <Component>
            <Box>
                <Balance transaction={transaction}></Balance>
                <Expensecard transaction={transaction}></Expensecard>
                <NewTransaction settransaction={settransaction}></NewTransaction>
            </Box>
             <Box>
              <Transaction transaction={transaction} settransaction={settransaction}></Transaction>
            </Box>
         </Component>
    </Box>
  );
}

export default App;
