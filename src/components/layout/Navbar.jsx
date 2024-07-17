import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon = 'fab fa-github', title = 'Github Finder' }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
