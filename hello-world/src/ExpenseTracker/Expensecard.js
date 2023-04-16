import {Box, Card, CardContent,Typography,styled} from '@mui/material';

const Container= styled(Box)`
 display:flex;
 & > div{
    flex: 1;
    padding:10px;
 }
 `
const Expensecard =({transaction})=>{

   const amount=transaction.map(trans=>trans.amount);
   const income=amount.filter(item =>item>0).reduce((amount,items) => (amount+=items),0).toFixed(2);
   const expense=-1*(amount.filter(item =>item<0)).reduce((amount,items) => (amount+=items),0).toFixed(2);

       return (
            <Container>
             <Card>
                <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color:'green'}}>₹ {income}</Typography>
                </CardContent>
             </Card>
             <Card>
                 <CardContent>
                 <Typography>Expense</Typography>
                 <Typography style={{color:'red'}}>₹ {expense}</Typography>
                 </CardContent>
             </Card>
            </Container>
       )
}
export default Expensecard