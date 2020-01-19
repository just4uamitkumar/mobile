import React from 'react';
import { Row,  Col, Button } from 'reactstrap';

function CamDetail(props){
    return(             
        <div className="pageCont">
            <div className="pageHeader">
                <div className="container">
                    <h1>{props.name}</h1>

                    <Button color="warning" onClick={props.backTo}>Back to collection</Button>
                </div>                    
            </div>

            <div className="container">
                <div className="contentWraper">
                    <Row data-id={props.id} className="camDetail">
                        <Col xs="4">
                            <div className="product_img text-center">
                                <img src={props.imgUrl} alt="" />
                            </div>
                        </Col>
                        <Col xs="8" className="productDesc">
                            <div className="discount">
                                Discount <strong>{props.discount}%</strong>
                            </div>
                            <h3>{props.name}</h3>
                            <div className="price">
                                <span>Price :Rs. {props.price}</span><br/>
                                <del className="text-success">Regular Price :{props.regularPrice}</del>
                            </div>
                            <div className="story">
                                <p><strong>{props.writer}</strong></p>
                                <p>{props.descrip}</p>
                                <p>Review : <strong>({props.reviewCount})</strong></p>
                            </div>
                            <div className="">Availaiblity :
                                <strong>{props.isAvailable}</strong></div>                
                        </Col>             
                    </Row>
                </div>
            </div>
        </div>            
    )
}
   

export default CamDetail;