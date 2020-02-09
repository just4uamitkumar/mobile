import React, { Component } from 'react';
import KeyBoard from '../subComp/KeyBoard';
import {Container, Button, Row, Col, Form, FormGroup, Label, Input,
Table} from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Contact',
            isOpen:false,
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields['name']){
            formIsValid = false;
            errors['name'] = 'Name Cannot be empty'; 

        }

        if(typeof fields['name'] !== 'undefined' ){

            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors['name'] = 'Enter only letter in the name';
            }

            if(fields['name'].length < 3){
                formIsValid = false;
                errors['name'] = 'Enter a valid name';
            }
        }

        //Phone
        if(!fields['phone']){
            formIsValid = false;
            errors['phone'] = 'Please Enter phone number';
        }

        if(typeof fields['phone'] !== 'undefined'){

            if(!fields['phone'].match(/^[0-9]+$/)){
                formIsValid = false;
                errors['phone'] = 'Enter only numbers in the phone number'
            }

            if(fields['phone'].length !== 10){
                formIsValid = false;
                errors['phone'] = 'Enter only 10 digit mobile number'
            }
        }

        //Email
        if(!fields['email']){
            formIsValid = false;
            errors['email'] = 'Enter email ID';
        }

        if(typeof fields['email'] !== 'undefined'){

            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
            
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //City
        if(!fields['city']){
            formIsValid = false;
            errors['city'] = 'Enter your city name';
        }

        this.setState({errors: errors});

        return formIsValid;
    }

    formSubmit = (e) => {
        e.preventDefault();

       if(this.handleValidation()){
            const name = document.MyForm.name.value;
            const phone = document.MyForm.phone.value;
            const email = document.MyForm.email.value;
            const city = document.MyForm.city.value;

            if ( name || phone || email || city) {
                this.setState({
                    name: name,
                    phone: phone,
                    email: email,
                    city: city
                });
            }
            this.setState({
                fields: {}
            });
       }

        else{
            alert("Please fill the required fields.");          
         }
        
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});       
    }


  render(){
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                    <h1>{this.state.pageTitle}</h1>

                     <Button color="dark" type="button" className="btn-sm"
                            onClick={this.props.contactText}>
                            Change Text
                     </Button>
                </Container>                
            </div>
            <div className="content">
                <Container>
                    <Form className="contactForm"  onSubmit={this.formSubmit}
                        name="MyForm">
                            <h5>Please fill your details to contact us</h5>
                        <Row>
                            <Col sm="3">
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" 
                                    onChange={this.handleChange.bind(this, "name")}
                                    value={this.state.fields["name"] || ''}
                                placeholder="Name" />
                                <span className="text-danger">{this.state.errors["name"]}</span>
                            </Col>

                            <Col sm="3">
                                <Label for="phone">Phone</Label>
                                <Input type="number" name="phone" id="phone" 
                                    onChange={this.handleChange.bind(this, "phone")}
                                    value={this.state.fields["phone"] || ''}
                                placeholder="Contact No." />
                                <span className="text-danger">{this.state.errors["phone"]}</span>
                            </Col>

                            <Col sm="3">
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" 
                                onChange={this.handleChange.bind(this, "email")}
                                value={this.state.fields["email"] || ''}
                                placeholder="Email" />
                                <span className="text-danger">{this.state.errors["email"]}</span>
                            </Col>

                            <Col sm="3">
                                <Label for="city">City</Label>
                                <Input type="select" name="city" id="city"
                                onChange={this.handleChange.bind(this, "city")}
                                value={this.state.fields["city"] || ''}>
                                    <option value="-1">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Agra">Agra</option>
                                    <option value="Mathura">Mathura</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Ghaziabad">Ghaziabad</option>
                                </Input>
                                <span className="text-danger">{this.state.errors["city"]}</span>
                            </Col>
                        </Row>

                        <FormGroup className="text-right">
                            <Button color="warning" type="reset">Reset</Button>
                            <Button color="success" type="submit">Submit</Button>                                   
                        </FormGroup>
                    </Form>
                    

                    <div className="contentWrap">
                        <div className="tableResponsive">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>{this.state.name}</td>
                                        <td>{this.state.phone}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.city}</td>
                                    </tr>                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>                   
                </Container>                
            </div>
            <KeyBoard/>
        </div>           
      );
  }
  
}

export default Contact;
