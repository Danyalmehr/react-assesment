import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const List = items.map(item =>
   {
       return <div className="list" key={item.key}>
           <p>
           {/* the result of currency input */} 
           <input type="text" id={item.key} value={item.currency} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
           <span>
           {/* Animiation on showing the inserted data*/ }
           <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />

           </span>
           </p>


     
    </div>})
    return <div>
                <FlipMove duration={300} easing="ease-in-out">
                    {List}
                </FlipMove>
    </div>;
  }

  export default ListItems;