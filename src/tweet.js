import React, {useState} from 'react';
import "./App.css";
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';


function Tweet({currency, amount, type}){
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);
  
    const Increment = () => {
      setCount(count+1);
      setRed(!isRed);
  
    };

    return(
        <div className="container">
            <div className="tweet">
                <div></div>
                
                <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td> {currency}</td>
                    <td>{amount}</td>
                    <td>{type}</td>
                    <td>Update</td>
                    <td>Delete</td>

                </tr>

                </tbody>

                </Table> 
            </div>
            <h1 className={isRed ? "red" : ""}>change my color</h1>

            <button onClick={Increment}>Increment</button>

            <h1>{count}</h1>
        </div>
    )
}

export default Tweet;