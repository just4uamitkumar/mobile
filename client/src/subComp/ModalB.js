import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function ModalB(props){
    return(            
        <Modal isOpen={props.isOpen} toggle={props.toggleModal} 
         id={props.id} className="modalA">
            <ModalHeader toggle={props.toggleModal}>{props.name}</ModalHeader>
            <ModalBody> 
                <h3>{props.content}</h3>
            </ModalBody>
            <ModalFooter>
                <Button color="danger"
                onClick={props.toggleModal}>No</Button>
                <Button color="success"
                onClick={props.Logout}>Yes</Button>                                     
            </ModalFooter>
        </Modal> 
    )
}

export default ModalB;
