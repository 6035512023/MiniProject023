import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
// import VideoBackgroundPage from './components/VideoBackgroundPage';
import Home from './components/Home';
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import FormInput from './components/FormInput';
import { ListItem } from '@material-ui/core';
import ListItems from './components/ListItems'


class App extends Component{
  constructor(props){

    super(props)

    this.state ={

      user: {}
    }
  }

  componentDidMount(){
    this.authListrner()
  }

  authListrner(){
    fire.auth().onAuthStateChanged((user) =>{

      if(user){
        this.setState({user})
      }
      else {
        this.setState({ user: null})
      }
    })
  }

  render(){
    if(this.state.user == null) {
      return (
        <div>
          <Topbar />
          <Login />
        </div>
      )
    }

    return(
      <div>
        <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/FormInput" component={FormInput} />
          <Route path="/ListItems" component={ListItems} />
          <Route path="/login" component={Login} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App