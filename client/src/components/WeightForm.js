import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


import FormItem from './core/formItem'
import { fetchOneWeight, addWeight, updateWeight } from '../redux/actions/weight'

const initialForm = {
  max: 0,
  min: 0,
  date: '',
  _id: '',
  isSubmitted: false
}

class WeightForm extends React.Component{
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    //cek baru ato lama
    //jika lama maka get data
    this.setWeight()
  }

  setWeight() {
    if (typeof this.props.match.params.id === 'undefined') this.state = initialForm
    else {
      let id = `${this.props.match.params.id}`
      this.setState({_id: id})
      this.props.fetchOneWeight(id)
    }
  }

  componentWillUnmount () {
    this.setState({ isSubmited: false })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let weight = {
      max: this.state.max,
      min: this.state.min,
      date: this.state.date
    }

    if (this.state._id === '') this.props.addWeight(weight)
    else this.props.updateWeight(this.state._id, weight)

    this.setState({isSubmitted: true})
  }

  render() {
    return (
      <div>
        { (this.state.isSubmitted && this.props.isUpdated) && <Redirect to={{pathname:'/weight'}}/>}

        <form onSubmit={this.handleSubmit}>
          <FormItem type="number" name="max" label="Max" value={this.state.max} handleChange={this.handleChange} />
          <FormItem type="number" name="min" label="Min" value={this.state.min} handleChange={this.handleChange} />
          <FormItem type="date" name="date" label="Date" value={this.state.date} handleChange={this.handleChange} />
          <input type="submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isUpdated: state.weightData.isUpdated,
    isUpdating: state.weightData.isUpdating,
    updateError: state.weightData.updateError,
    updateErrorMessage: state.weightData.updateErrorMessage,
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchOneWeight: id => dispatch(fetchOneWeight(id)),
    addWeight: weight => dispatch(addWeight(weight)),
    updateWeight: (id, weight) => dispatch(updateWeight(id, weight))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightForm)
