import React from 'react'
import { Link } from 'react-router-dom'


class TableBody extends React.Component{
  render() {
    let { datas, print, handleFunction} = this.props
    let trs = []

    if (Array.isArray(datas)) {
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
          btns.push(<Link to={`/weight/${data._id}`}><button key>Detail</button></Link>)

          tds.push(<td key={i}>{btns}</td>)
          i++
        }

        return (<tr key={data._id}>{tds}</tr>)
      })
    } else if (typeof datas === 'object') {

      for (let key in datas) {
        if (key !== '_id') {
          let tds = []
          tds.push(<td key={key}>{key}</td>)
          tds.push(<td key={datas[key]}>{datas[key]}</td>)
          trs.push(<tr>{tds}</tr>)
        }
      }
    }

    return(
      <tbody>
        {trs}
      </tbody>
    )
  }
}
export default TableBody