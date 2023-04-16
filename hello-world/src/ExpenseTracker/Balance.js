import {Box,Typography,styled} from '@mui/material'
const BalanceText= styled(Typography)`
 margin: 10px 0;
 font-size:25px;
 margin-bootom:
 color:blue;
 text-align:center;
`
const Balance = ({transaction})=>{
      const amount=transaction.map(trans=>trans.amount);
      const total=amount.reduce((amount,items) => (amount+=items),0).toFixed(2);
      return (
         <BalanceText>Balance: {total}</BalanceText>
      )
}
export default Balance