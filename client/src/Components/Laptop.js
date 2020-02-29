import React, { Component } from 'react';
import {Container, Table} from 'reactstrap';
import lapyList from '../Laptop.json';
import LapProduct from '../subComp/LapProduct';
import ModalA from '../subComp/ModalA';
import ModalB from '../subComp/ModalB';

class LapTop extends Component {
    constructor(){
        super();
        this.state = {
            pageTitle : 'Laptop',
            titleA:'Appple Laptop',
            titleB:'HP Laptop',
            titleC:'Dell Laptop',
            titleD:'Lenovo Laptop',
            titleE:'Apple Laptop',
            appleLapy:lapyList.Apple,
            HPLaptop:lapyList.HP,
            DellLaptop:lapyList.Dell,
            isOpen:false,
            HPModal:[],
            DellModal:[],
            removeHPModal:[],
            removeDellPModal:[]
        }
    }

    checkStatus(index){
        var appleLapy = this.state.appleLapy;
        var item = appleLapy[index];
        item.isChecked = !item.isChecked;
        this.setState({
            appleLapy:appleLapy           
        });
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    pickModal = (id) => {
        const filteredA = this.state.HPLaptop.filter(e => id === e.id);
        const filteredB = this.state.DellLaptop.filter(e => id === e.id);
        this.setState({
            HPModal: filteredA,
            DellModal: filteredB,
            isOpen: !this.state.isOpen
        })
    };

    removeThis = (id) => {
        const removeHP = this.state.HPLaptop.filter(e => id == e.id);
        const removeDell = this.state.DellLaptop.filter(e => id == e.id)
       
        this.setState({
            removeHPModal:removeHP,
            removeDellPModal:removeDell,
            isOpen: !this.state.isOpen
        })
    };

    Logout ( id ) {       
        const removeHP = this.state.HPLaptop.filter(e => id !== e.id);
        const removeDell = this.state.DellLaptop.filter(e => id !== e.id);
        this.setState({
            HPLaptop:removeHP,
            DellLaptop:removeDell,
            isOpen: !this.state.isOpen
        })
    }

  render(){
      const {appleLapy, HPLaptop, DellLaptop, 
        HPModal, DellModal, removeHPModal, removeDellPModal} = this.state
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                     <h1>{this.state.pageTitle}</h1>
                </Container>                
            </div>
            <div className="content">
                <Container>
                    <div className="lapyList">
                        <h2>{this.state.titleA}</h2>
                        <div className="tableResponsive">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Hard Disk</th>
                                        <th>Ram</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {appleLapy.map((e, index) =>
                                        <tr key={index} id={e.id} className={e.isChecked ? 'disable' : ''}
                                    >
                                            <td>{e.id }</td>
                                            <td>{e.name}</td>
                                            <td>{e.screenSize} inch</td>
                                            <td>{e.hardDisk} GB</td>
                                            <td>{e.ram} GB</td>
                                            <td>Rs. {e.price}</td>
                                            <td><input type="checkbox" checked={e.isChecked} 
                                            onChange={ () => this.checkStatus(index)} /></td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
                
                <hr className="clearfix"/>
                
                <Container>
                    <div className="lapyList">
                        <h2>{this.state.titleB}</h2>
                        <div className="tableResponsive">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Hard Disk</th>
                                        <th>Ram</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                       HPLaptop.map((e, index) => 
                                        <LapProduct key={index} name={e.name}
                                        price={e.price} ram={e.ram} hardDisk={e.hardDisk}
                                        screenSize={e.screenSize} id={e.id}
                                        pickModal={this.pickModal }
                                        removeThis={this.removeThis}/>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
                
                <hr className="clearfix"/>
                
                <Container>               
                    <div className="lapyList">
                        <h2>{this.state.titleC}</h2>
                        <div className="tableResponsive">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Hard Disk</th>
                                        <th>Ram</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        DellLaptop.map((e, index) => 
                                        <LapProduct key={index} name={e.name}
                                        price={e.price} ram={e.ram} hardDisk={e.hardDisk}
                                        screenSize={e.screenSize} id={e.id}
                                        pickModal={this.pickModal }
                                        removeThis={this.removeThis}/>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
                
            </div>

                {HPModal.map((e, index) =>
                    <ModalA isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal} name={e.name}
                    key={index} id={e.id} price={e.price}
                    imgUrl={e.imgUrl} hardDisk={e.hardDisk} ram={e.ram}/>
                )}
                  

                {DellModal.map((e, index) =>
                    <ModalA isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal} name={e.name}
                    key={index}  id={e.id} price={e.price}
                    imgUrl={e.imgUrl} hardDisk={e.hardDisk} ram={e.ram} 
                    preItem={this.preItem} nextItem={this.nextItem} />                                                                                              
               )}

                {removeHPModal.map((e, index) =>
                    <ModalB isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal} name={'Delete ' + e.name}
                    key={index} id={e.id} 
                    content={'Do you want to delete ' + e.name + '?'}
                    Logout={() => this.Logout(e.id)} />
                )}

                {removeDellPModal.map((e, index) =>
                    <ModalB isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal} name={'Delete ' + e.name}
                    key={index} id={e.id} 
                    content={'Do you want to delete ' + e.name + '?'}
                    Logout={() => this.Logout(e.id)} />
                )}
        </div>           
      );
  }
  
}

export default LapTop;

