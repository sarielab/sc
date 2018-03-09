import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchWeight, deleteWeight } from '../redux/actions/weight'
import { Table } from '../components'

const heads = ['date', 'max', 'min', 'variance']

class WeightList extends React.Component {
  constructor(props) {
    super(props)
    this.props.fetchWeight()

    this.handleInsert = this.handleInsert.bind(this)
    this.handleFunction = {
      'update': this.handleUpdate.bind(this),
      'delete': this.handleDelete.bind(this)
    }
  }
  handleInsert() {
    alert('insert ')
  }
  handleUpdate(action) {
    alert('update '+action)
  }
  handleEdit(key) {
    alert('edit '+key)
  }
  handleDelete(id) {
    let confirm = window.confirm('Are you sure to delete? ')
    if (confirm) this.props.deleteWeight(id)
  }
  render() {
    const { weights, isFetching, fetchError, fetchErrorMessage } = this.props
    const handleFunction = this.handleFunction

    return(
      <div>
        <Link to="/add-weight"><button>+ Add New Weight</button></Link>
        { isFetching && <h4>Fetching Weight Data</h4>}
        { !isFetching && weights.length === 0 && <h4>No Data</h4>}
        { !fetchError &&
          <Table
            heads= {heads}
            handleFunction= {handleFunction}
            datas= {weights}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weights: state.weightData.weights,
    isFetching: state.weightData.isFetching,
    fetchError: state.weightData.fetchError,
    fetchErrorMessage: state.weightData.fetchErrorMessage,
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchWeight: () => dispatch(fetchWeight()),
    deleteWeight: id => dispatch(deleteWeight(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightList)
