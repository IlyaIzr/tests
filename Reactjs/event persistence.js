import React, { useState } from 'react'

const AddList = () =>{
  const [name, setName] = useState('')  
  const [listItem, setListItem] = useState(['form field 1' , 'form field 2'])
      console.log(name);
      console.log(listItem);  
  return(
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="listName">List Name</label>
          <input type="text" className="form-control form-control-lg" id="listName" placeholder="Name of the list"
            onChange={event => setName(event.target.value)} value={name}></input>
        </div>
        <div className="form-group">
          <label htmlFor={0}>list Item 1</label>
          <input type="text" className="form-control" id={0} placeholder="listItem1"
            onChange={ event => {
              const targ0 = event.target;
              setListItem(prevState=>{
                let newState = prevState
                newState[0] = targ0.value;            
                return([...newState])
              })
            } }
             value={ listItem[0] || '' }></input>
        </div>
        <div className="form-group">
          <label htmlFor="1">list Item 2</label>
          <input type="text" className="form-control" id={1} placeholder="listItem2" 
            onChange={ event => {
              event.persist()
              setListItem(prevState=>{
                let newState = prevState
                newState[1] = event.target.value;
                return([...newState])
              })
            } }
            value={ listItem[1] || '' }></input>
        </div>
      </form>
    </div>
  )
}
