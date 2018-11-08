import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Makeup.css';
import MakeupCard from '../components/MakeupCard';
// import MakeupForm from '../containers/MakeupForm';
import { getMakeup } from '../actions/makeup'
// import MakeupItem from '../components/MakeupItem'
// import { getMakeupId } from '../actions/makeup'


class Makeup extends Component{

  componentDidMount() {
  this.props.getMakeup()

}

  render() {
    return (
      <div className="homePage">
      <div className="MakeupContainer">
        {this.props.makeup.map(makeup =>
          <MakeupCard key={makeup.id} getMakeup={this.props.getMakeup} makeup={makeup} />
           )}

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
