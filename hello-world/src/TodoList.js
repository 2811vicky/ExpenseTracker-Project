import React, { useState } from "react";

function TodoList(){
       const [activity,setactivity] =useState("");
        const [listdata,setlistdata]=useState([]);
        function addactivity(){
            //  setlistdata([...listdata,activity])    
            //   console.log(listdata)

            setlistdata((listdata)=>{
                const update=[...listdata,activity]
                 console.log(update)
                  setactivity("");
                  return update
            })
        }
        function removeactivity(i){
              const updatelistdata= listdata.filter((elem,id)=>{
                  return i!=id;
              })
               setlistdata(updatelistdata);
        }
         function removeall(){
                setlistdata([]);
         }
      return (
         <>
           <div className="container">
             <div className="header">Todo List</div>
              <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setactivity(e.target.value)}></input>
               <button onClick={addactivity}>Add</button>
               <p className="List-heading">Here is Your List</p>
               {listdata!=[] && listdata.map((data,i)=>{
                  return(
                       <>
                           <p key={i}>
                              <div className='listData'>{data}</div>
                              <div className="btn-position">
                              <button onClick={()=>removeactivity(i)}>Remove</button>
                              </div>
                           </p>
                       </>
                  )
               })}
               { listdata.length>=1 && <button onClick={removeall}>Remove all</button>}
           </div>
         </>
      )
}
export default TodoList