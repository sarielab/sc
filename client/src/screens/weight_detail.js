import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchOneWeight } from '../redux/actions/weight'
import { Table } from '../components'

class WeightDetail extends React.Component {
  constructor(props) {
    super(props)
    this.props.fetchOneWeight(props.id)
  }

  render() {
    const { weight, isFetching, fetchError, fetchErrorMessage } = this.props
    return(
      <div>
          { isFetching && <h4>Fetching Weight</h4>}
          { !isFetching && weight === {} && <h4>No Data</h4>}
          { !fetchError &&
            <Table
              heads= {['Date', weight.date]}
              datas= {weight}
            />

          }
          <Link to="/"><button>Back to home</button></Link>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weight: state.weightData.weight,
    isFetching: state.weightData.isFetching,
    fetchError: state.weightData.fetchError,
    fetchErrorMessage: state.weightData.fetchErrorMessage,
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    fetchOneWeight: id => dispatch(fetchOneWeight(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightDetail)
