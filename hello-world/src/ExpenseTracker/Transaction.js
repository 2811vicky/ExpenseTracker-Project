import { Box,Typography,Divider,List} from "@mui/material"
import Transpar from "./Transpar"

const Transaction= ({transaction,settransaction})=>{
      
     return (
          <Box>
              <Typography variant="h5">Transaction history</Typography>
               <Divider></Divider>
               <list>
               {
                     transaction.map((trans,index)=>(
                        <Transpar index={index} trans={trans} settransaction={settransaction} transaction={transaction}></Transpar>
                     ))
                }
               </list>
          </Box>
     )
}
export default Transaction