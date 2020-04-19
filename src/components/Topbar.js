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
                <Navbar.Brand href="#home">PhotoDiary</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Diary</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={logout}>LOGOUT</Button>
                </Form>
            </Navbar>
        </div>
    );
}


export default Topbar;

  
