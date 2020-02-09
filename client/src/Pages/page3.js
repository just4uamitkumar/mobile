import React, { Component } from 'react';
import {Container} from 'reactstrap';

class Page3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Page 3'
        }
    } 

  render(){
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                    <h1>{this.state.pageTitle}</h1>

                </Container>                
            </div>
            <div className="content">
                <Container>
                    Page 3
                </Container>                
            </div>
        </div>           
      );
  }  
}

export default Page3;
