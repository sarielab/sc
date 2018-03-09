import React from 'react'

class TableHeader extends React.Component{
  render() {
    let heads = this.props.heads
    return(
      <thead>
        <tr>
        {
          heads.map((head, i) => <th key={i}>{head.toUpperCase()}</th>)
        }
        </tr>
      </thead>
    )
  }
}
export default TableHeader