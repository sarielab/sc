import React from 'react'

import { Header, Footer, Table } from './components'

const heads = ['date', 'max', 'min', 'variance']
const datas = [
  {
    'date': '2015-01-25',
    'max': 50,
    'min': 49,
    'variance': 1,
    "_id":1
  },
  {
    'date': '2015-01-24',
    'max': 49,
    'min': 49,
    'variance': 0,
    "_id":2
  },
  {
    'date': '2015-01-23',
    'max': 52,
    'min': 49,
    'variance': 3,
    "_id":3
  },
  {
    'date': '2015-01-22',
    'max': 50,
    'min': 48,
    'variance': 2,
    '_id': 4
  }
]

class App extends React.Component {
  constructor() {
    super()

    this.handleFunction = {
      'insert': this.handleInsert.bind(this),
      'update': this.handleEdit.bind(this),
      'delete': this.handleDelete.bind(this)
    }
  }
  handleInsert(key) {
    alert('insert '+key)
  }
  handleEdit(key) {
    alert('edit '+key)
  }
  handleDelete(key) {
    alert('delete '+key)
  }
  render() {
    return (
      <div>
        <Header />
        <Table
          datas= {datas}
          heads= {heads}
          handleFunction= {this.handleFunction}
        />
        <Footer />
      </div>
    )
  }
}

export default App
