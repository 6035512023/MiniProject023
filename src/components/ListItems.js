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
  
    const useStyles = makeStyles((theme) => ({
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    }));
  
  
    const classes = useStyles();
  
    return (
  
      <div>
        <ul>{renderStore()}</ul>
      </div>
  
  
    );
  }
  
  export default ListItems;