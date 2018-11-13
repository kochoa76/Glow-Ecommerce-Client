import React from 'react';
import Cart from '../containers/Cart'
import Media from '../components/Media'
import Home from '../containers/Home'
import About from '../components/About'
import MakeupRoutes from '../components/MakeupRoutes'
import { Route, Switch } from 'react-router-dom'

const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Makeup" component={MakeupRoutes} />
          <Route path="/Media" component={Media} />
          <Route path ="/Cart" component={Cart}/>
          </Switch>
        </main>
)
export default Main
