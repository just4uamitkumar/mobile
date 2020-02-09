import React, { Component } from 'react';
import {Container} from 'reactstrap';

class Page2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Page 2'
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
                    Page 2
                </Container>                
            </div>
        </div>           
      );
  }  
}

export default Page2;
