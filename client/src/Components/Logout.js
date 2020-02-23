import React, { Component } from 'react';
import {Container} from 'reactstrap';

import {withRouter, Link} from 'react-router-dom'

class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem('token')
    }

  render(){
    return (
        <Container className="LoginPage text-center">
            <div className="loginWrap">  
              <h3>You have successfully logged out</h3>
              <p> <Link to='/'>Click Here</Link> to login again.</p>
            </div>
        </Container>                   
      );
  }
  
}

export default withRouter(Logout);
