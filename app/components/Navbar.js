import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <Link to='/hero' className='navButtonLeft'>
        HEROES
      </Link>
      <Link to='/team' className='navButtonLeft'>
        TEAMS
      </Link>
      <span>
        <h1 className='superhero-header'>SUPER HEROES</h1>
      </span>
      <Link to='/universe' className='navButtonRight'>
        UNIVERSES
      </Link>
      <Link to='/team' className='navButtonRight'>
        LOGOUT
      </Link>
    </div>
  );
};

export default Navbar;
