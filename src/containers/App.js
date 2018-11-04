import React from 'react'
import './App.css'
import Makeup from './Makeup'

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
    console.log(this.state)
    return (
    <div className="App">
    <Makeup makeup={this.state.makeup}/>
    </div>
    )
  }
}
export default App
