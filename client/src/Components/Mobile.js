import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemAction';
import PropTypes from 'prop-types';

import ItemModal from '../subComp/ItemModal';

class Mobile extends Component {
    constructor(){
        super();
        this.state = {
            pageTitle:"Mobile",
            showDetail:false,
            myItem:[]
        }
    }

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = ( id ) => {
        this.props.deleteItem(id);
    }

    

    explore = ( id ) => {
    }


  render(){
      const {items} = this.props.item;
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                    <h1>{this.state.pageTitle}</h1>                     
                </Container>                
            </div>
            <div className="content">
                <Container>

                    <ItemModal/>     
                            
                    <ListGroup className="itemWrap">
                        <TransitionGroup className="mobileList">
                            {items.map(({_id, name, price, screenSize,
                            rearCamera, frontCamera, imgUrl}) => (
                                <CSSTransition key={_id} timeout={500} 
                            classNames="fade">
                                <ListGroupItem className="itemBlock">
                                    <div className="productName">
                                        <div className="name">{name}</div>
                                    <Button color="dark"
                                        onClick={ this.onDeleteClick.bind(this, _id) }>&times;</Button>
                                    </div>
                                    <div className="productBody">                                     
                                        <p className="">
                                            <strong>Back Camera Resolution : </strong>
                                            <strong className="text-success">{rearCamera} MP</strong>
                                        </p>
                                        <p className="">
                                            <strong>Front Camera Resolution :</strong>
                                            <strong className="text-success">{frontCamera} MP</strong>
                                        </p>                                     
                                        <div className="imgWrap">
                                            <img src={imgUrl} alt=""/>
                                        </div>
                                        <p className="text-center text-success">
                                            <strong>Scren Size : {screenSize} inch</strong>
                                        </p>
                                    </div>
                                    <div className="bottom">
                                        <div className="price">Rs. {price}</div>
                                        <Button color="warning" type="button"
                                        onClick={this.explore}>Explore</Button>
                                    </div>                      
                                   
                                </ListGroupItem>
                            </CSSTransition>
                            ) )}                            
                        </TransitionGroup>
                    </ListGroup>                  
                    
                </Container>              
                
            </div>
        </div>           
      );
  }
  
}

Mobile.propTypes = {
    getItems : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem})(Mobile);

