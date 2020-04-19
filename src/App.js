import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from './config/fire';
// import VideoBackgroundPage from './components/VideoBackgroundPage';
import Home from './components/Home';
// import './index.css'

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
    if(this.state.user == null){

    return(
      <div>
        <Login />
      </div>
    )
    }
    
    return(
      <div>
        <Home/>
      </div>
    )

  }
}

export default App