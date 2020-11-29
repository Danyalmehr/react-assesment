import React, {useState} from 'react';
import { Table } from 'reactstrap';

const Wallet = () => {
    const players= [
        {currency:"Dollar", amount:"500", type:"Credit"},
        {currency:"Pound", amount:"200", type:"Debit"},
        {currency:"Euro", amount:"300", type:"Credit"},
        {currency:"AU Dollar", amount:"100", type:"Debit"},
    ]

    const renderPlayer = (player, index) => {
        return(
            <tr key={index}>
                <td>{player.currency}</td>
                <td>{player.amount}</td>
                <td>{player.type}</td>
            </tr>
        )
    }

    return(
        <div className="container">
            <div className="wallet">
                <div></div>
                
                <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Type</th>


                </tr>
                </thead>
                <tbody>
                    {players.map(renderPlayer)}
                </tbody>

                </Table> 
            </div>

        </div>
    )
}

export default Wallet;