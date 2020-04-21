import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBView, MDBMask, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import { firestore } from '../index'

export default props => {

   const { store } = props
    const { id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line} = store

   
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <li>
            <div>
                <MDBCard className="my-5 px-5"  style={{ backgroundColor: 'white'}}>
                    <MDBCardBody >
                        <MDBRow >
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={imgUrl1}
                                                style={{ height: 280, width: 330 }}
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                    <MDBMask overlay="white-slight" />
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <h3 className="font-weight-bold mb-1 p-0">
                                    <strong>
                                        PRODUCT : {productName} <br />
                                        PRICE : {price} <br />
                                        DETAIL: {detail} <br />
                                        ....................CONTACT.................... <br />
                                        NAME: {nameUser} <br />
                                        TELEPHONE : {telephone} <br />
                                        FACEBOOK : {facebook} <br />
                                        LINE : {line} <br />
                                    </strong>
                                </h3>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                
            </div>
        </li>
    )


}

