import React from 'react'

import TableBody from './table/body'
import TableHeader from './table/header'

class Table extends React.Component{
  render() {
    return(
      <table>
        <TableHeader heads={this.props.heads} />
        <TableBody
          datas={this.props.datas}
          print={this.props.heads}
          handleFunction={this.props.handleFunction}
        />
      </table>
    )
  }
}
export default Table