import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Nav as BootstrapNav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from 'reactstrap';

export const Nav = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark color='dark' fixed='fixed' expand='md'>
      <div className='container'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <BootstrapNav className='mr-auto' navbar>
            <NavItem>
              <NavLink exact className='nav-link' to='/'>
                <i className='fa fa-home fa-lg'></i> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className='nav-link' to='/about'>
                <i className='fa fa-info fa-lg'></i> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className='nav-link' to='/menu'>
                <i className='fa fa-list fa-lg'></i> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className='nav-link' to='/contact'>
                <i className='fa fa-address-card fa-lg'></i> Contact Us
              </NavLink>
            </NavItem>
          </BootstrapNav>
          <BootstrapNav className='ml-auto'>
            <NavItem>
              <Button outline onClick={() => toggleModal()}>
                <i className='fa fa-sign-in fa-lg'></i> Login
              </Button>
            </NavItem>
          </BootstrapNav>
        </Collapse>
      </div>
    </Navbar>
  );
};
