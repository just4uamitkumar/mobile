import React, { Component } from 'react';
import { Link, NavLink, withRouter} from "react-router-dom";
import { FaHome, FaMobileAlt, FaLaptop, FaCamera, FaPhone } from 'react-icons/fa';

class Navigation extends Component {
    constructor(){
        super();

        this.state = {
          navLinks:[
            {'name':'Home', 'path':'/', 'icon': <FaHome/>}, 
            {'name':'Mobile', 'path':'/Mobile', 'icon': <FaMobileAlt/> },
            {'name':'Laptop', 'path':'/Laptop', 'icon': <FaLaptop/> },
            {'name':'Camera',  'path':'/Camera', 'icon': <FaCamera/>}, 
            {'name':'Contact Us', 'path':'/Contact', 'icon': <FaPhone/>}
          ]
        }
    }

  render(){
    return (
      <nav>
          <ul>
            {
              this.state.navLinks.map((e, index) =>
                index === 0 ?
                <li key={index}>
                  <NavLink exact to={e.path}>{e.icon} <span>{e.name}</span> </NavLink>
                </li>
                :
                <li key={index}>
                  <NavLink to={e.path}>{e.icon} <span>{e.name}</span> </NavLink>
                </li>
            )}              
          </ul>
      </nav>        
      );
  }
  
}

export default withRouter(Navigation);
