import React from 'react'
import './App.css'
import Makeup from '../containers/Makeup'
import Media from '../components/Media'
import Home from '../containers/Home'
import About from '../components/About'
// import MakeupNav from '../components/MakeupNav'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'



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
          <div className="nav">
            <div className="nav-title">
              Only Good.
            </div>
            <div className="top-round-rainbow">
            </div>
            <div className="nav-links">
              <ul>
                <div className="Navbar">
                <li><NavLink className="style-button" to="/"> Home </NavLink></li>
                <li><NavLink to="/About"> About </NavLink></li>
                <li><NavLink to="/Makeup"> Makeup </NavLink></li>
                <li><NavLink to="/Media"> In the Media </NavLink></li>
                </div>
              </ul>


         <Switch>
         <Route path="/" exact={true} component={Home} />
         <Route path="/About" component={About} />
         <Route path="/Makeup" component={Makeup} />
         <Route path="/Media" component={Media} />
         </Switch>
       </div>
     </div>
  </Router>

    )
  }
}
export default App
