import React from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

function itemDetail(props){
    return( 
        
        <div className="itemDetail">
            <div className="imgWrap">
                <img src={props.imgUrl} alt=""/>
            </div>
            <div className="detail">
                <h4>{props.fulName}</h4>
                <h4><strong>Rs. {props.price}</strong></h4>
                    <p>{props.ramSize} GB Ram</p>
                    <p>{props.battery} mah Battery</p>
                    <p>{props.screenSize} inch Screen</p>
                    <p>{props.rearCamera} MP Primary Camera</p>
                    <p>{props.frontCamera} MP Selfi Camera</p>
                <div className="">
                    <p><strong>Descripttion : </strong></p>
                    <p>{props.descript}</p>
                </div>
            </div>
        </div>       
        
    )
}

export default itemDetail;