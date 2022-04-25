import React ,{useState} from "react";

function Form()
{
    const[ite,setite]=useState("");
    const[formdata,setformdata]=useState([]);
    const item=(event)=>
    {
       setite( event.target.value);
    }
    const additem=(event)=>
    {
        event.preventDefault();
        const obj={
            id:Math.random().toString,
            name:ite
        }
        setformdata(obj);
        setite("");
    }
    return(
        <div>
          <form onSubmit={additem}>
            <h1>To do list</h1>
            <input type="text" placeholder="add an item" value={ite} onChange={item} />
            <button type="submit" >Add item</button>
            </form>
            <ul>
                {formdata.map((contact)=>(
                    <li key={contact.id}>
                        {contact}
                    </li>
                ))
                }
            </ul>
        
            
      </div>
    );
}
export default Form;