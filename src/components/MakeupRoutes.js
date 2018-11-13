import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Makeup from '../containers/Makeup'
import MakeupItem from '../components/MakeupItem'
class MakeupRoutes extends React.Component {

  render() {
    return(
  <div>
  <Switch>
    <Route exact path ="/makeup" component={Makeup} />
    <Route path="/makeup/:name" component={MakeupItem}/>
  </Switch>
  </div>
    )
  }
}





export default MakeupRoutes
