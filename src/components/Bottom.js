import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import amber from '@material-ui/core/colors/purple';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const accent = amber[500]; 

const Bottom = () =>{

    
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h4" color="accent" noWrap>
            Covid-19 News
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );

}

export default Bottom;