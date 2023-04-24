import React from 'react';
import logo from '../../../assets/logo.png'
import { moment } from 'moment'

const Navbar = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo}></img>
        <p><b>Journalism Without Fear or Favour</b></p>
        <p><small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small></p>
      </div>
    </div>
  );
};

export default Navbar;