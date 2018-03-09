import React from 'react'
import {shallow} from 'enzyme'

import TableBody from './body'

describe('<TableBody /> component', () => {
  it ('renders normally', () => {
    const bodyWrapper = shallow(<TableBody />)
    expect(bodyWrapper).toHaveLength(1)
  })

  it('should have one tbody', () => {
    const bodyWrapper = shallow(<TableBody />)
    const tbody = bodyWrapper.find('tbody')
    expect(tbody).toHaveLength(1)
  })

})