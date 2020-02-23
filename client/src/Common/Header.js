import React, { Component } from 'react';
import Navigation from './Navigation';
import { Input,  FormGroup, Label } from 'reactstrap';
import {withRouter, Link} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()

        this.state = {
            logo:"Demo App",
            pageList:[{'name':'Select a Page'},
                    {'name':'Page 1', 'path':'/Pages/Page1'},
                    {'name':'Page 2', 'path':'/Pages/Page2'},
                    {'name':'Page 3', 'path':'/Pages/Page3'}, 
                    {'name':'Page 4', 'path':'/Pages/Page4'}],

            radioList:[{'name':'Page 1', 'path':'/Pages/Page1'},
                        {'name':'Page 2', 'path':'/Pages/Page2'},
                        {'name':'Page 3', 'path':'/Pages/Page3'}, 
                        {'name':'Page 4', 'path':'/Pages/Page4'}]
        }
    }

    selectChange = (e) => {
        e.preventDefault();
        this.props.history.push(`${e.target.value}`);
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
                        {
                            this.state.pageList.map((e, index) => 
                                index === 0 ? 

                                <option key={index} defaultValue>
                                    {e.name}
                                </option>
                                :

                                <option key={index} value={e.path}>
                                    {e.name}
                                </option>
                            )
                        }                    
                    </Input>
                </FormGroup>
            
                <FormGroup className="topRadio">                    
                    <FormGroup check>
                        {this.state.radioList.map((e, index) => 
                            <Label check>
                                <Input type="radio" value={e.path} key={index}
                                onChange={this.onChange} name="pages"/> {e.name}
                            </Label>                        
                            )
                        }                                            
                    </FormGroup>
                </FormGroup>
            </div>

          <div className="mainHeader">
            <div className="logo">
                <Link to="/Home">{this.state.logo}</Link>
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
