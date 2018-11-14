import React from 'react';
import Cart from '../containers/Cart'
import Media from '../components/Media'
import Home from '../containers/Home'
import About from '../components/About'
import MakeupRoutes from '../components/MakeupRoutes'
import { Route, Switch } from 'react-router-dom'
import Checkout from '../containers/Checkout'
const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Makeup" component={MakeupRoutes} />
          <Route path="/Media" component={Media} />
          <Route path ="/cart" component={Cart}/>
          <Route path ="/cart/checkout" component={Checkout} />
          </Switch>
        </main>
)
export default Main
