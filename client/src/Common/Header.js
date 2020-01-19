import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
    constructor(){
        super()

        this.state = {
            logo:"Demo App"
        }
    }

  render(){
    return (
      <header>        
            <div className="logo">
                <a href="/">{this.state.logo}</a>
            </div>

            <div className="tagline">
                <h2>{this.props.headTitle}</h2>
            </div>
            <Navigation/>
      </header>        
      );
  }
  
}

export default Header;
