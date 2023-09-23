import React, { useState } from "react";
import ToDolist from "./ToDolist";

const Form_Component = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const handleritemEvent = (event) => {
    setInputlist(event.target.value);
  };

  const ListOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputlist];
    });
    setInputlist("");
  };

  const deleteItems=((id)=>{
    console.log("deleted")
    setItems((olditems)=>{
      return olditems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  })

  return (
    <>
      <div className="row_1">
        <div className="row_2">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Enter Your Todo Item"
            value={inputlist}
            onChange={handleritemEvent}
          />
          <button onClick={ListOfItems}>Add</button>
          <ul className="remove_dot">
            {items.map((itemvalue,index) => {
                return<ToDolist 
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItems}/>
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Form_Component;

