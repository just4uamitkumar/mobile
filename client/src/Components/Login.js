import React, { Component } from 'react';
import {Container,  Form, FormGroup, Input, Button, 
    Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import NumKey from '../subComp/NumKey';
import {withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Login',
            register:'Create Account',
            isOpen:false,
            username:'',
            password:'',
            phone:'',
            numbers:['9718293847', '8076063660', '9555384885']
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    numClick = (event) => {                
        this.setState({
            phone: this.state.phone + parseInt( event.currentTarget.name )
        });
    }

    clearInput = () => {        
        this.setState({phone:this.state.phone.slice(0, -1)});
    }

    onRegister = (e) => {
        e.preventDefault();

        this.state.phone.length === 0 ? 

        alert('Please enter your pin to login')

        :  
        
        this.state.numbers.includes(this.state.phone) ?

        this.props.history.push('/')

        :

        alert('You Entered wrong PIN');
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.username === '') {
            alert('User Name is Empty');
        }
        else if(this.state.password === ''  ){
            alert('Password is Empty')
        }
        else if(this.state.username === 'admin' && 
                this.state.password === 'admin'){
            this.props.history.push('/')
        }
        else{
            alert('User credentials are wrong')
        }

    }

    onChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    signUp = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });        
    }


  render(){
    return (

        <Container className="LoginPage">
            <div className="loginWrap">               
                <Form onSubmit={this.onSubmit}>
                    <h2 className="text-center">{this.state.pageTitle}</h2>                    

                    <FormGroup>
                        <Label for="username">User Name</Label>
                        <Input type="text" name="username" value={this.state.username}
                        onChange={this.onChange} placeholder="username"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" value={this.state.password}
                        onChange={this.onChange} placeholder="password"/>
                    </FormGroup>

                    <FormGroup>                                
                        <Button color="success" className="btn-block">Login</Button>
                    </FormGroup>

                    <FormGroup className="text-center">                                
                        <span onClick={this.toggleModal}>Don't have an account ?</span>
                    </FormGroup>
                </Form>


                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} 
                 className="modalA">
                    <ModalHeader toggle={this.toggleModal}>
                        {this.state.register}
                    </ModalHeader>
                    <ModalBody>                            
                        <Form onSubmit={this.onRegister}>                       
                            <FormGroup>
                                <Label for="phone">Please enter your mobile number to register</Label>                           
                                <Input type="number" name="phone"
                                onChange={this.signUp} placeholder="Phone Number"
                                defaultValue={this.state.phone} id="phone"/>                                                                
                            </FormGroup>
                            <FormGroup>
                                <NumKey name={this.name}
                                    clearInput={this.clearInput} 
                                    numClick={this.numClick} />
                            </FormGroup>
                            <FormGroup className="text-right">
                                <Button color="success">Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>                    
                </Modal>
              
            </div>
        </Container>
                   
      );
  }
  
}

export default withRouter(Login);
