import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup,
Label, Input, Button, Row, Col} from 'reactstrap';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemAction';

class ItemModal extends Component {
    constructor(){
        super();

        this.state = {
            modal:false,
            name:'',
            price:'',
            screenSize:'',
            rearCamera:'',
            frontCamera:'',
            imgUrl:'',
            fullName:'',
            ramSize:'',
            battery:'',
            descript:''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

   

    onChange = (e) => {
        this.setState({
           [e.target.name ] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            price: this.state.price,
            screenSize: this.state.screenSize,
            rearCamera: this.state.rearCamera,
            imgUrl:this.state.imgUrl,
            frontCamera: this.state.frontCamera,
            fullName:this.state.fullName,
            ramSize:this.state.ramSize,
            battery:this.state.battery,
            descript:this.state.descript
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close Modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <FormGroup>
                    <Button color="success" onClick={this.toggle}>
                    Add Mobile</Button>
                </FormGroup>
                

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add detail of Mobile
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="name">Mobile Name</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="name" id="name"
                                    placeholder="Add Mobile Name"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="fullName">Full Name of Product</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="fullName" id="fullName"
                                    placeholder="Enter full name of Mobile"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="price">Price</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="price" id="price"
                                placeholder="Enter Mobile Price"
                                onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="screenSize">Screen Size</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="screenSize" id="screenSize"
                                placeholder="Provide Screen Size"
                                onChange={this.onChange} />
                                    </Col>
                                </Row>                                
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="rearCamera">Rear Camera</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="rearCamera" id="rearCamera"
                                    placeholder="Provide Back Camera Resolution"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="frontCamera">Front Camera</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="frontCamera" id="frontCamera"
                                    placeholder="Add Resolution of Front Camera"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>                            

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="ramSize">Ram Size</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="ramSize" id="ramSize"
                                    placeholder="add ram size of mobile"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="battery">Battery</Label> 
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="battery" id="battery"
                                    placeholder="add battery strength"
                                    onChange={this.onChange} />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="descript">Product Description</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="textarea" name="descript" id="descript"
                                    placeholder="add product description"
                                    onChange={this.onChange} />                                       
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col xs="4">
                                        <Label for="imgUrl">Image Path (URL)</Label>
                                    </Col>
                                    <Col xs="8">
                                        <Input type="text" name="imgUrl" id="imgUrl"
                                    placeholder="add Image path"
                                    onChange={this.onChange} />                                        
                                    </Col>
                                </Row> 
                            </FormGroup>

                            <FormGroup>
                                <Button type="reset" color="warning">Reset</Button>
                                <Button type="submit" color="primary">
                                    Add to List
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>            
        )
    }
}

const mapsStateToProps = state => ({
    item:state.item
}) 

export default connect(mapsStateToProps, {addItem})(ItemModal);