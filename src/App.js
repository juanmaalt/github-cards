import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/Card.js'
import Form from './components/Form.js'


class App extends React.Component{
  constructor(props){
    super();
    this.state ={
      profiles: [],
    }
   };

   addNewProfile = (newProfile) =>{
      this.setState(prevState => ({
        profiles: [...prevState.profiles, newProfile],
      }))
    };

  render(){

    return(
      <div>  
        <div className="header">{this.props.title}</div>
        <Form addFunction={this.addNewProfile}/>
        <CardList profs={this.state.profiles}/>
      </div>
      )
  }
}

export default App;
