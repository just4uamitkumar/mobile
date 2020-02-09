import React, { Component } from 'react';
import Navigation from './Navigation';
import { Input,  FormGroup, Label } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()

        this.state = {
            logo:"Demo App",
            pageList:[{'name':'page 1', 'path':'Page1'},
                    {'name':'page 2', 'path':'Page2'},
                    {'name':'page 3', 'path':'Page3'}, 
                    {'name':'page 4', 'path':'Page4'}]
        }
    }

    selectChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
    }

    onChange = (e) => {
        this.props.history.push(`${e.target.value}`);
    }

  render(){
    return (
      <header>
          <div className="headerTop">              
                <FormGroup className="topSelect">
                    <Input type="select" name="select" onChange={this.selectChange}>
                        <option defaultValue> Select a Page </option>
                        <option value="Page1"> Page 1 </option>
                        <option value="Page2"> Page 2 </option>
                        <option value="Page3"> Page 3 </option>
                        <option value="Page4"> Page 4 </option>                        
                    </Input>
                </FormGroup>
            
                <FormGroup className="topRadio">                    
                    <FormGroup check>                        
                        <Label check >
                            <Input type="radio" value="Page1" 
                            onChange={this.onChange} name="pages"/> Page 1
                        </Label>
                        <Label check >
                            <Input type="radio" value="Page2" 
                            onChange={this.onChange} name="pages"/> Page 2
                        </Label>
                        <Label check >
                            <Input type="radio" value="Page3"
                            onChange={this.onChange} name="pages"/> Page 3
                        </Label>
                        <Label check >
                            <Input type="radio" value="Page4" 
                            onChange={this.onChange} name="pages"/> Page 4
                        </Label>                                                
                    </FormGroup>
                </FormGroup>
            </div>

          <div className="mainHeader">
            <div className="logo">
                <a href="/">{this.state.logo}</a>
            </div>

            <div className="tagline">
                <h2>{this.props.headTitle}</h2>
            </div>
            <Navigation/>
          </div>
            
      </header>        
      );
  }
  
}

export default withRouter(Header);
