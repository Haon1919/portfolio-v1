import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import {particlesConfig} from './assets/json/particlesjs-config';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/Header';


//styling
import './scss/index.scss';


class App extends Component {
  constructor(){
    super();
    this.state = {
      menuToggled: false 
    }
    this.ParticleRef = React.createRef();
  }

  componentDidMount(){
    // this.ParticleRef.current.props.height = "100vh";
    // this.ParticleRef.current.props.width = "100vw";
    console.log(this.ParticleRef.current.props.height)
  }

  toggleMenu(){
    this.setState({
      menuToggled: !this.state.menuToggled
    });
  }


  render() {
    let menuToggled = this.state.menuToggled ? '-transform' : '';
    return (
      <div className={'main-background' + menuToggled}>
        <Header 
          triggerScreenShift = {()=>this.toggleMenu()} 
          menuToggled = {this.state.menuToggled}
        />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Projects' render = {(props) => <Projects {...props} menuToggled={this.state.menuToggled} />} />
          <Route exact path='/About' component = {About} />
        </Switch>
        
        <Particles ref = {this.ParticleRef} width = "100vw" height = "100vh"params={particlesConfig}/>
      </div>
    );
  }
}

export default App;
