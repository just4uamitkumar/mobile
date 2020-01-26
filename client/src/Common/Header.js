import React, { Component } from 'react';
import Navigation from './Navigation';
import { Input, Row, Col, FormGroup, Label } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()

        this.state = {
            logo:"Demo App",
            pageList:[{'name':'page 1', 'path':'./Pages/page1'},
                    {'name':'page 2', 'path':'./Pages/page2'},
                    {'name':'page 3', 'path':'./Pages/page3'}, 
                    {'name':'page 4', 'path':'./Pages/page4'}]
        }
    }

    selectChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
    }

  render(){
    return (
      <header>
          <div className="headerTop">              
                <FormGroup className="topSelect">
                    <Input type="select" name="select" onChange={this.selectChange}>
                        {
                            this.state.pageList.map((e, index) => 
                                <option key={index} value={e.path}>
                                    {e.name}
                                </option>
                            )
                        }
                        
                    </Input>
                </FormGroup>
            
                <FormGroup className="topRadio">                    
                    <FormGroup check>
                        {this.state.pageList.map((e, index) =>
                            <Label check>
                                <Input type="radio" name="pages"/> {e.name}
                            </Label>
                        )}
                        
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
