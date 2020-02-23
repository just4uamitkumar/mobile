import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true;

        if(token == null){
            loggedIn = false
        }

        this.state = {
            pageTitle:"Home",
            loggedIn
        }
    }

  render(){
      if(this.state.loggedIn === false){
          return <Redirect to="/"/>
      }
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                     <h1>{this.state.pageTitle}</h1>
                </Container>                
            </div>
            <div className="content">
                <Container>
                    <p>To connect to a replica set (rather than an individual instance), replace the host name with the replica set name and a comma-separated list of member IP addresses, as shown below. Replace the REPLICA-SET-NAME placeholder with the name of the MongoDB replica set. By default, the replica set is named rs0 in the Bitnami Multi-Tier Solution for MongoDB.</p>
                </Container>                
            </div>
        </div>           
      );
  }
  
}

export default Home;
