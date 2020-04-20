import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const Bottom = () =>{

    
    return (
        <div>
        <MDBNavbar color="cyan" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Covid-19 News</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    </div>
    );

}

export default Bottom;