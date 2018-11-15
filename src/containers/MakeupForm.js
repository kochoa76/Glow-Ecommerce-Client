import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateMakeupFormData } from '../actions/makeupFormData'
import { createMakeup } from '../actions/makeup'
class MakeupForm extends Component {

  handleOnChange= event => {
    const { name, value } = event.target
    const currentMakeupFormData = Object.assign({}, this.props.makeupFormData, {[name]: value })
    this.props.updateMakeupFormData(currentMakeupFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createMakeup(this.props.makeupFormData)
    }

  render() {
    console.log(this.props.makeupFormData)
  const { name, price, img_url, description } = this.props.makeupFormData

  return (
    <div>
    Add makeup to the inventory
    <br></br>
    <form onSubmit={this.handleOnSubmit}>
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

      <button type="submit"> Add Item </button>
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

export default connect(mapStateToProps, { updateMakeupFormData, createMakeup })(MakeupForm)
