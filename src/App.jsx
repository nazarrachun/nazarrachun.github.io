import React, { Component } from 'react';

class App extends React.Component {
	constructor(props) {
  	super(props);
 		 this.state = {
       contacts:[]
     };
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=100")
    .then(res => res.json())
    .then(data => {
        this.setState({
          contacts: data.results
        })
    })
  }

  render() {

    return (
	      <div className = "User">
          {this.state.contacts.map( (contact,index) => {

              return (
                <li key={index}>
									{contact.name.first} {contact.name.last}</li>
							)
            })
          }
        </div>
    );
  }
}
export default App;
