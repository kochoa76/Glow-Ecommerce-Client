import React from 'react';
import Checkout from '../containers/Checkout'
import Cart from '../containers/Cart'
import Home from '../components/Home'
import About from '../components/About'
import MakeupRoutes from '../components/MakeupRoutes'
import { Route, Switch } from 'react-router-dom'
import Purchase from '../components/Purchase'
import ReviewForm from '../containers/ReviewForm'

const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Makeup" component={MakeupRoutes} />
          <Route path ="/cart" component={Cart}/>
          <Route path ="/checkout" component={Checkout} />
          <Route path ="/purchase" component={Purchase} />
          <Route path="/write-review" component={ReviewForm} />
          </Switch>
        </main>
)
export default Main
