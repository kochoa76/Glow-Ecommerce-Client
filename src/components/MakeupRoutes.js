import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Makeup from '../containers/Makeup'
import MakeupItem from '../components/MakeupItem'

const MakeupRoutes =() => (
  <div>
  <Switch>
    <Route exact path ="/makeup" component={Makeup} />
    <Route path="/makeup/:id" component={MakeupItem}/>
  </Switch>
  </div>
)
export default MakeupRoutes
