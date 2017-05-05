import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import Listbox from './components/listbox.jsx';
import Form from './components/form.jsx'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCats: [
        {
          name: 'jaiem',
          email: 'email@.com',
          description: 'dumb AF',
          url: 'some crai crai url',
        }
      ],
    }
    this.getCats =  this.getCats.bind(this);
    this.postCats = this.postCats.bind(this);
  }

  componentWillMount() {
    this.getCats();
  }

  getCats() {
    axios.get('/cat')
    .then((res) => {
      this.setState({
        allCats: res.data
      });
    })
    .catch(err => {
      console.error('Get cats failed.')
    });
  }

  postCats(cat) {
    console.log('postCats in Appjs fired')
    axios.post('/cat', cat)
    .then(() => {
      this.getCats();
    })
    .catch(err => {
      console.error('Post cats failed')
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>fullstack react cats thing </h2>
        </div>
        <Form postCats={this.postCats}/>
        <Listbox allCats={this.state.allCats}/>
      </div>
    );
  }
}

export default App;
