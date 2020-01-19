import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.scss';
import './css/1024.scss';
import './css/768.scss';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

import {Provider} from 'react-redux';
import store from './store';

import Header from './Common/Header';

import Home from './Components/Home';
import Mobile from './Components/Mobile';
import Camera from './Components/Camera';
import Laptop from './Components/Laptop';
import Contact from './Components/Contact';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      headTitleA : 'This is a common header text',
      headTitleB : 'This is Contact page text',
      isTagChangedA :false
    }

  }

  contactText = () => {
    this.setState({
      isTagChangedA : !this.state.isTagChangedA
    })
  }

  

  render(){
    const {headTitleA, headTitleB} = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            
            <Header headTitle={this.state.isTagChangedA ? 
              headTitleB : headTitleA} /> 
                       

            <div className="main">
              <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/Mobile"><Mobile/></Route>
                <Route path="/Laptop"><Laptop/></Route>
                <Route path="/Camera"><Camera/></Route>
                <Route path="/Contact"><Contact contactText={this.contactText}/></Route>
              </Switch>
            </div>
          </Router>
          
        </div>
      </Provider>
      );
  }
  
}

export default App;
