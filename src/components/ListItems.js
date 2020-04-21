import React, { useState, useEffect } from 'react'
import { firestore } from '../index'
import axios from 'axios'
import Store from './Store'
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar';


const ListItems = props => {


    const [store, setStore] = useState([{}])
  
  
    const retriveData = () => {
  
      firestore.collection("store").onSnapshot(snapshot => {
  
        console.log(snapshot);
  
        let myAni = snapshot.docs.map(d => {
  
          const { id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line } = d.data()
          console.log(id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line)
          return { id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line }
  
        })
  
        setStore(myAni)
  
      })
    }
  
  
    const renderStore = () => {
  
      console.log(store)
  
      if (store && store.length) {
        return store.map((store, index) => {
          return (
                <Store store={store} index={index} />
          )
        })
      }
      
      else {
  
        return <li>No store</li>
  
      }
    
    }
  
  
    useEffect(() => {
  
  
      retriveData()
  
  
    }, [])
  

  
    return (
  
      <div>
        <Topbar />
        <br />
        <ul>{renderStore()}</ul>
      </div>
  
  
    );
  }
  
  export default ListItems;