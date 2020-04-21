import React, { Component, useState, useEffect } from 'react'
import './Topbar.css'
import { Button, Form, Nav, NavDropdown, Navbar, FormControl, Spinner, Icon } from 'react-bootstrap';
import fire from '../config/fire';


const Topbar = () =>{
    
    const logout = e => {

        fire.auth().signOut();
    }

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PickMe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FormInput">From</Nav.Link>
                    <Nav.Link href="/ListItems">Store</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>LOGOUT</Button>
                </Form>
            </Navbar>
        </div>
    );
}


export default Topbar;

  
