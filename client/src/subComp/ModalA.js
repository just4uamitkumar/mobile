import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function ModalA(props){
    return(            
        <Modal isOpen={props.isOpen} toggle={props.toggleModal} 
         id={props.id} className="modalA">
            <ModalHeader toggle={props.toggleModal}>{props.name}</ModalHeader>
            <ModalBody>                            
                <div className="product_img text-center">
                    <img src={props.imgUrl} alt="" />
                </div>
                <div className="storage">
                    <span><strong>Hard Disk</strong> : {props.hardDisk} TB</span>
                    <span><strong>Ram</strong> : {props.ram} GB</span>
                </div>
            </ModalBody>
            <ModalFooter>
                    <h4>Rs. {props.price}</h4>
                    <div>
                        <Button color="primary"
                        onClick={() => props.preItem(props.id)}>Prev</Button>
                        <Button color="success"
                        onClick={() => props.nextItem(props.id)}>Next</Button>
                    </div>                   
            </ModalFooter>
        </Modal> 
    )
}

export default ModalA;
