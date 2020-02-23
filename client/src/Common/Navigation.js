import React, { Component } from 'react';
import {  NavLink,  withRouter} from "react-router-dom";
import ModalB from '../subComp/ModalB';
import { FaHome, FaMobileAlt, FaLaptop, FaCamera, FaPhone, FaPowerOff } from 'react-icons/fa';

class Navigation extends Component {
    constructor(){
        super();

        this.state = {
          navLinks:[
            {'name':'Home', 'path':'/Home', 'icon': <FaHome/>}, 
            {'name':'Mobile', 'path':'/Mobile', 'icon': <FaMobileAlt/> },
            {'name':'Laptop', 'path':'/Laptop', 'icon': <FaLaptop/> },
            {'name':'Camera',  'path':'/Camera', 'icon': <FaCamera/>}, 
            {'name':'Contact Us', 'path':'/Contact', 'icon': <FaPhone/>}            
          ],
          isOpen:false
        }
    }

    toggleModal = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    Logout = () => {
      this.toggleModal();
      this.props.history.push('/Logout');
    }

  render(){
    return (
      <nav>
          <ul>
            {
              this.state.navLinks.map((e, index) =>               
                <li key={index}>
                  <NavLink to={e.path}>{e.icon} <span>{e.name}</span> </NavLink>
                </li>
            )}              
          </ul>

          <div>
            <span onClick={this.toggleModal}><FaPowerOff/></span>
          </div>

          <ModalB isOpen={this.state.isOpen}
            toggleModal={this.toggleModal} name={'Logout'}
             content={'Are you sure want to logout?'}  Logout={this.Logout} /> 
      </nav>        
      );
  }
  
}

export default withRouter(Navigation);
