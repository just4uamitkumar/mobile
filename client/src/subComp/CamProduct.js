import React from 'react';
import { Button, Col } from 'reactstrap';

function CamProduct(props){
    return(        
        <Col sm="3" data-id={props.id} className="camList">
            <div className="productName">{props.name}</div>
            <div className="product_img text-center">
                <img src={props.imgUrl} alt="" />
            </div>
            <div className="product_info">                
               <span className="money">Rs. {props.price}</span>               
                <Button type="button" color="warning" className="btn-sm"
                 onClick={() => props.explore(props.id)}>
                    Explore
                </Button>
            </div>            
        </Col>


    )
}

export default CamProduct;