import React from 'react'
import './App.css'
import Main from '../containers/Main'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

library.add(faShoppingBag);

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
          <div className="container">

          <Router>
            <div>
              <label className="shopping-bag-icon-cart">
                <NavLink to="/cart" style={{textDecoration: 'none'}}>
                  <FontAwesomeIcon
                    icon="shopping-bag"
                    className="shopping-bag-icon"
                    color="#8B008B"
                  />
                  {"  "}{this.props.cart.count}
                </NavLink>
              </label>
              <Header />
              <Main />
            </div>
          </Router>
        </div>

        )
      }
    }

    const mapStateToProps = state => {
      return {
        cart: state.cart
      }
    }
export default connect(mapStateToProps)(App)
