import React from 'react'
import fire from '../config/fire'
import Topbar from './Topbar';
import './Home.css';
import { Carousel, Card } from 'react-bootstrap';
import CollapsePage from './CollapsePage';


const Home = () => {

     const logout = () => {

         fire.auth().signOut();
     }

     state={
        collapseID: "collapse1"
      }
      
      toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));

    return(
    <div>
             <Topbar />
             <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9"
                            style={{ height: 350, width: 800 }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9"
                            style={{ height: 350, width: 800 }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/93907466_228787178208906_5668032696597610496_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHSoxVcrgcyPMXE4ot1HR5jgocBazUhMFqChwFrNSEwWkuhqVghPnwi2Z8Aiut6TSsB7RdEb-CCz7GhZKWstnJl&_nc_ohc=3Tq5Jtl_018AX8VtHYo&_nc_ht=scontent.fbkk5-6.fna&oh=f51c68e5cc04147a43a6666b7858fa10&oe=5EC26BD9"
                            style={{ height: 350, width: 800 }}
                        />
                    </Carousel.Item>
                </Carousel>
                <CollapsePage />
                
    </div>

        
    )
}

export default Home;