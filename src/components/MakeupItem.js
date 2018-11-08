import React from 'react';
import { connect } from 'react-redux'
import { getMakeup } from '../actions/makeup'
// import { Link } from 'react-router-dom';

class MakeupItem extends React.Component {

  componentDidMount() {
  this.props.getMakeup()

  }

  render() {
    console.log(this.props.match.params.id)
  return(
    <div className="MakeupItemContainer">
  
       )}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  makeup: state.makeup
  })
}


export default connect(mapStateToProps, { getMakeup })(MakeupItem)
