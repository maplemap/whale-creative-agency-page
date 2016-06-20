import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar.less';

export default React.createClass({
    render(){
        return(
            <Navbar default fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link #1</NavItem>
                        <NavItem eventKey={2} href="#">Link #2</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});