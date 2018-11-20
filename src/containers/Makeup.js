import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Makeup.css';
import MakeupCard from '../components/MakeupCard';
import { getMakeup } from '../actions/makeup'
import { getReviews } from '../actions/reviews'
import './Makeup.css'

class Makeup extends Component{

  componentDidMount() {
  this.props.getMakeup()
}

  render() {
    return (
      <div className="homePage">
        <div className="MakeupContainer">
          {this.props.makeup.map(makeup =>
            <MakeupCard key={makeup.id} getReviews= {this.props.getReviews} getMakeup={this.props.getMakeup} makeup={makeup} />
             )}
        </div>
        <br></br>
      </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup
  })
}

export default connect(mapStateToProps, { getMakeup, getReviews})(Makeup)
