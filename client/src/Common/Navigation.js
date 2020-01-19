import React, { Component } from 'react';
import { Link} from "react-router-dom";
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
                <li key={index}><Link to={e.path}>{e.icon} <span>{e.name}</span> </Link></li>
            )}              
          </ul>
      </nav>        
      );
  }
  
}

export default Navigation;
