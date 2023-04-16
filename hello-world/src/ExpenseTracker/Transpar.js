import { ListItem, ListItemIcon, ListItemText,styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Detailed=styled(ListItem)`
margin-top: 10px;
`


const Transpar =({trans,index,settransaction,transaction})=>{
      const color =trans.amount > 0 ? 'Green' :'Red';
     
      //  const deletetransaction=(id)=>{
      //       settransaction(transaction.filter(trans=>trans.id!==id))
      //  }
      return (
       <Detailed onClick={function(){settransaction((p)=>{return(p.filter((element,i)=>{return i!==index; }));})}} style={{background:`${color}`}}>
          <ListItemText>{trans.text}</ListItemText>
          <ListItemText>{trans.amount}</ListItemText>
       </Detailed>
      )
}
export default Transpar;