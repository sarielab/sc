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
        <Route exact path="/weight-form" component={WeightForm}/>
        <Route exact path="/weight-form/:id" component={WeightForm}/>
      </div>
    </BrowserRouter>
    )
  }
}

export default Weight
