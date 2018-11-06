import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Makeup.css';
import MakeupCard from '../components/MakeupCard';
import MakeupForm from '../containers/MakeupForm';
import { getMakeup } from '../actions/makeup'


class Makeup extends Component{

  componentDidMount() {
  this.props.getMakeup()
}

  render() {
    return (
    <div className="MakeupContainer">
      <h1> Makeup </h1>
      {this.props.makeup.map(makeup => <MakeupCard key={makeup.id} makeup={makeup}/>  )}
      <MakeupForm />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup
  })
}

export default connect(mapStateToProps, { getMakeup })(Makeup)
