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
import Login from './Components/Login';
import Logout from './Components/Logout';

import Weather from './Pages/Weather';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';
import Page4 from './Pages/page4';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      headTitleA : 'Common header text',
      headTitleB : 'Contact page text',
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
                <Route exact path="/"><Login/></Route>
                <Route path="/Logout"><Logout/></Route>
                <Route path="/Home"><Home/></Route>
                <Route path="/Mobile"><Mobile/></Route>
                <Route path="/Laptop"><Laptop/></Route>
                <Route path="/Camera"><Camera/></Route>
                <Route path="/Contact">
                  <Contact contactText={this.contactText}/>
                </Route>
                <Route path="/Pages/Weather"><Weather/></Route>
                <Route path="/Pages/page2"><Page2/></Route>
                <Route path="/Pages/page3"><Page3/></Route>
                <Route path="/Pages/page4"><Page4/></Route>
                
              </Switch>
            </div>
          </Router>
          
        </div>
      </Provider>
      );
  }
  
}

export default App;
