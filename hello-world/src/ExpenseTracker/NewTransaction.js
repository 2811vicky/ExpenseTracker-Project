import {Box,Typography,TextField, Button,styled} from '@mui/material';
import {useState} from 'react';
const Container=styled(Typography)`
 display:flex;
 flex-direction:column;
 & >h5,& >div,&>button{
    margin-top: 30px;
 }
 `
const NewTransaction =({settransaction})=>{
  const [text,settext]=useState('');
  const [amount,setamount]=useState();

  const addtransaction =()=>{
          const transaction={
               id:Math.floor(Math.random()*1000000),
                text:text,
                amount:+amount
          }
          settransaction(prevState=>[transaction,...prevState]);
  }
  return (
        <Container>
         <Typography variant='h5'>New Transaction</Typography>
         <TextField label="Enter Expense" onChange={(e)=>settext(e.target.value)}></TextField>
         <TextField label="Enter Amount" onChange={(e)=>setamount(e.target.value)}></TextField>
         <Button variant='contained' onClick={()=>addtransaction()}>Add Transaction</Button>
        </Container>
  )
}
 export default NewTransaction