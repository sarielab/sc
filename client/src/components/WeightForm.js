import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


import FormItem from './core/formItem'
import { fetchOneWeight, addWeight, updateWeight } from '../redux/actions/weight'

const initialState = {
  max: 0,
  min: 0,
  date: '',
  _id: '',
  is_submitted: false
}

class WeightForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    if (typeof props !== 'undefined') {
      let id = `${props.match.params.id}`
      alert(id)
      this.setState({_id: id})
      props.fetchOneWeight(`${id}`)

    }
  }

  componentWillUnmount () {
    this.setState({ is_submitted: false })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.weight!==this.props.weight)
      this.setState({
        min: nextProps.weight.min,
        max: nextProps.weight.max,
        date: nextProps.weight.date
      })
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

    this.setState({is_submitted: true})
  }

  render() {
    return (
      <div>
        { (this.state.is_submitted && this.props.isUpdated) && <Redirect to={{pathname:'/weight'}}/>}

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
    weight: state.weightData.weight,
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
