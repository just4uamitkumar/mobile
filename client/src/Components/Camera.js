import React, { Component } from 'react';
import {Container,  Row} from 'reactstrap';
import CamProduct from '../subComp/CamProduct';
import CamDetail from '../subComp/CamDetail';
import axios from 'axios';

class Camera extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Camera',
            cameraList : [],
            detail:[],
            showDetail:false
        }
    }

    componentDidMount(){
        axios.get(`./Camera.json`)
        .then(res => {
            const cameraList = res.data;
            this.setState({cameraList})
        })
    }

    explore = (id) => {
        console.log(id)
        const filtered = this.state.cameraList.filter(e => id === e.id);
        this.setState({  
            detail: filtered,
            showDetail:!this.state.showDetail
         });
    }

    backTo = () => {
        this.setState({
            showDetail:!this.state.showDetail
        })
    }

  render(){
    return (

        <>

        {
            this.state.showDetail ?
            <>

                {       
                    this.state.detail.map((e, index) => 
                        <CamDetail key={index} imgUrl={e.imgUrl} id={e.id} price={e.price} name={e.name} 
                        regularPrice={e.regularPrice} discount={e.discount} writer={e.writer}
                        descrip={e.descrip} reviewCount={e.reviewCount}
                        isAvailable={e.isAvailable}
                        backTo={this.backTo} />
                )} 

            </>

            :

            <div className="pageCont">
                <div className="pageHeader">
                    <Container>
                        <h1>{this.state.pageTitle}</h1>
                    </Container>                
                </div>
                <div className="content">
                    <Container> 
                        <div className="contentWraper">                       
                            <Row>
                                {
                                    this.state.cameraList.map((e, index) => 
                                    <CamProduct key={index} imgUrl={e.imgUrl} id={e.id}
                                    price={e.price} name={e.name} explore={this.explore}/>
                                )}
                            </Row>                        
                        </div>
                    </Container>                
                </div>
            </div>
        }
        </>
                   
      );
  }
  
}

export default Camera;
