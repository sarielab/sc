import React from 'react'

class TableBody extends React.Component{
  render() {
    let { datas, print, handleFunction } = this.props
    console.log(this.props)
    let trs = []

    trs = datas.map(data => {
      let tds = []
      let i = 0

      for (let key in data) {
        if (print.indexOf(key) !== -1) tds.push(<td key={i}>{data[key]}</td>)

        i++
      }

      if (typeof handleFunction !== 'undefined') {
        let btns = []
        for (let fn in handleFunction)
          btns.push(<button key={fn} onClick={() => handleFunction[fn](data._id)}>{fn}</button>)

        tds.push(<td key={i}>{btns}</td>)
        i++
      }

      return (<tr key={data._id}>{tds}</tr>)
    })

    return(
      <tbody>
        {trs}
      </tbody>
    )
  }
}
export default TableBody