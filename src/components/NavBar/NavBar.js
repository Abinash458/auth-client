import React, { useState } from 'react';
import {
    NavbarBrand,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const signOutHandler = () => {
        props.userSignOutRequest();
        // props.history.push('/');
        setTimeout(() => {
            window.location.replace('/');
        }, 1500);
    }

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand style={{ color: "#ffffff" }} href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "#ffffff" }} href="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            {
                                localStorage.getItem('token')
                                    ?
                                    <NavLink style={{ color: "#ffffff" }} onClick={signOutHandler} >Sign out</NavLink>
                                    :
                                    <NavLink style={{ color: "#ffffff" }} href="/signin">Sign In</NavLink>
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;