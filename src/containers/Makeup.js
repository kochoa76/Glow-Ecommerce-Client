import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Makeup.css';
import MakeupCard from '../components/MakeupCard';
import MakeupForm from '../containers/MakeupForm';
import { getMakeup } from '../actions/makeup'
import MakeupNav from '../components/MakeupNav'

class Makeup extends Component{

  componentDidMount() {
  this.props.getMakeup()
}

  render() {
    return (
      
      <div className="homePage">
      <div className="MakeupNav">
        <MakeupNav />
      </div>
      <div className="MakeupContainer">
        {this.props.makeup.map(makeup => <MakeupCard key={makeup.id} makeup={makeup} handleDelete={this.handleDelete}/>  )}
      <MakeupForm />
    </div>
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
