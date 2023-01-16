import React from 'react';
import Links from '../elements/Links';
import StyledNavbar from '../blocks/Navbar';
import Dropdown from './Dropdown';

const Navbar = (props) => {
  return (
    <>
      <Dropdown />
      <StyledNavbar shadow={props.shadow} primary={props.primary}>
        <Links to="/">Home</Links>
        <Links to="/posters">Posters</Links>
        <Links to="/login">
          <StyledNavbar.UserIcon src="/user.svg" alt="user-icon" />
        </Links>
        <Links to="/checkout">
          <StyledNavbar.Icon src="/cartIcon.svg" alt="cartIcon" />
        </Links>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
