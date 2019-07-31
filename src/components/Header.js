import React, { Component } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default class Header extends Component {
  render() {
    let menuToggled = this.props.menuToggled ? '-transform' : '';
    return (
        <div className={"header"+menuToggled}>
            <h1>Noah's Portfolio</h1>
            <Menu triggerScreenShift = {()=>this.props.triggerScreenShift()}/>
            <MobileMenu />
        </div>
      );
  }
}

