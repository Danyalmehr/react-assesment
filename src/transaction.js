import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

library.add(faTrash);


class Transaction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        currency:'',
        amount:'',
        type:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    
  }
  /* adding rows but could not figure out a way to do amount and type */
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    
    if(newItem.currency !==""){
      const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem:{
        currency:'',
        amount:'',
        type:'',
        key:''
      }
    })
    }
  }
  /* assigning currency to the input */
  handleInput(e){
    this.setState({
      currentItem:{
        currency: e.target.value,
        amount: e.target.value,
        type: e.target.value,
        key: Date.now()
      }
    })
  }

  /* deleting added row */ 
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

    /* Updating added rows */ 
  setUpdate(currency,key){
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.currency= currency;
      }
    })
    this.setState({
      items: items
    })
  }

 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Currency" value= {this.state.currentItem.currency} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} 
          deleteItem = {this.deleteItem} 
          setUpdate = {this.setUpdate} > </ListItems>
        
      </header>
    </div>
  );
 }
}

export default Transaction;