import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchOneWeight } from '../redux/actions/weight'
import { Table } from '../components'


class WeightDetail extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.props.fetchOneWeight(`${props.match.params.id}`)
  }
  render() {
    const { weight, isFetching, fetchError, fetchErrorMessage } = this.props

    return(
        <div>
          <Link to="/weight"><button>Back</button></Link>
          { isFetching && <h4>Fetching Weight Data</h4>}
          { !isFetching && weight === {} && <h4>No Data</h4>}
          { !fetchError && typeof weight.date !== 'undefined' &&
            <Table
              heads= {['Date', weight.date]}
              datas= {weight}
            />
          }
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
