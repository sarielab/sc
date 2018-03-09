import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { WeightList, WeightForm, WeightDetail } from '../components'

class Weight extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <Route exact path="/weight/:id" component={WeightDetail}/>
        <Route exact path="/weight" component={WeightList}/>
        <Route path="/add-weight" component={WeightForm}/>
      </div>
    </BrowserRouter>
    )
  }
}

export default Weight
