import React, {Component} from 'react'
import './Makeup.css'
import MakeupCard from '../components/MakeupCard'
import MakeupForm from '../containers/MakeupForm'
class Makeup extends Component{

  render() {
    return (
    <div className="MakeupContainer">
      <h1>Makeup </h1>
      {this.props.makeup.map(makeup => <MakeupCard key={makeup.id} makeup={makeup}/>)}

    <MakeupForm />
    </div>
    )
  }
}
export default Makeup
