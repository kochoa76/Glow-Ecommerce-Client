import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateMakeupFormData } from '../actions/makeupFormData'
class MakeupForm extends Component {

  handleOnChange= event => {
    [event.target.name]= event.target.value
    const currentMakeupFormData = Object.assign({}, this.props.makeupFormData, {[event.target.name]: event.target.value })
    this.props.updateMakeupFormData(currentMakeupFormData)
  }

  render() {
  const { name, price, img_url, description } = this.props.makeupFormData

  return (
    <div>
    Add makeup to the inventory
    <br></br>
    <form>
      <label htmlFor="name"> Name: </label>
      <input type="text" name="name" value={name} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="price"> Price: </label>
      <input type="number" name="price" value={price} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="img_url"> Img Url:  </label>
      <input type="text" name="img_url" value={img_url} onChange={this.handleOnChange}/>
      <br></br>
      <label htmlFor="description"> Description: </label>
      <input type="text" name="description" value={description} onChange={this.handleOnChange}/>
      <input type="submit"/>
      </form>
    </div>
  )
}

}

const mapStateToProps = state => {
  return ({
    makeupFormData: state.makeupFormData
  })
}

export default connect(mapStateToProps, { updateMakeupFormData })(MakeupForm)
