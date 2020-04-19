import React from 'react'
 import fire from '../config/fire'
 import Topbar from './Topbar';
import './Home.css';

const Home = () => {

     const logout = () => {

         fire.auth().signOut();
     }


    return(
         <div>
             <Topbar/>
             <div className="bg">

            </div>
        </div>

        
    )
}

export default Home;