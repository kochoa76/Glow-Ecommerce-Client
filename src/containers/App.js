import React from 'react'
import './App.css'
import Main from '../containers/Main'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      makeup: []
    }
  }
    componentDidMount(){
      fetch(`${API_URL}/makeup`)
      .then(response => response.json())
      .then(makeup => this.setState({ makeup }))
    }

    render() {
        return (
          <Router>
            <div className="container">
              <Header />
              <Main />
            </div>
          </Router>

        )
      }
    }
export default App
