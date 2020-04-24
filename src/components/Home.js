import React from 'react'
import fire from '../config/fire'
import Topbar from './Topbar';
import './Home.css';
import { Carousel, Card, toggleCollapse } from 'react-bootstrap';
import {MDBRow, MDBCol,MDBContainer} from "mdbreact";
import Admin from './Admin';


const Home = () => {

     const logout = () => {

         fire.auth().signOut();
     }

    return(
    <div>
             
             
                <Topbar />
                <div className="photobox">
                <MDBContainer>
                    <div className="row1">
                        <MDBCol md="12" className="mb-3">
                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </div>
                    <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-3">
                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </div>
                <div className="row1">
                <Admin />
                </div>
                
    </div>

        
    )
}

export default Home;