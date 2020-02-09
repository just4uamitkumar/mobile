import React, { Component } from 'react';
import {Container} from 'reactstrap';

class Page4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Page 4'
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
                    Page 4
                </Container>                
            </div>
        </div>           
      );
  }  
}

export default Page4;
