import React from 'react';
import { Button } from 'reactstrap';

function LapProduct(props){
    return(            
        <tr id={props.id}>
            <td>{props.id }</td>
            <td>{props.name}</td>
            <td>{props.screenSize} inch</td>
            <td>{props.hardDisk} TB</td>
            <td>{props.ram} GB</td>
            <td>Rs. {props.price}</td>
            <td><Button type="button" color="success" className="btn-sm"
                onClick={() => props.pickModal(props.id)}>
                    Get Info
                </Button>
            </td>
        </tr>
    )
}

export default LapProduct;
