import React, { Component } from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Link className="pulsate" to="/Projects">Noah Shirey Web Developer</Link>
        </div>
      );
  }
}

