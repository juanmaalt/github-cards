import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state= {userName:''};
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const response = await
            axios.get(`https://api.github.com/users/${this.state.userName}`);
  
      //console.log(response.data);
      this.props.addFunction(response.data);
      this.setState({userName:''});
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="text-center">
          <input 
            type="text" 
            value={this.state.userName}
            onChange={event => this.setState({userName: event.target.value})}
            placeholder="Github username" 
            required
          />
          <button>Add card</button>
        </form>
      )
    }
  }

  export default Form;