import React from 'react'

import { Header, Footer } from './components'
import { Weight } from './screens'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Weight />
        <Footer />
      </div>
    )
  }
}

export default App
