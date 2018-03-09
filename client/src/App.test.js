import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App /> component', () => {
  it('renders normally', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper).toHaveLength(1)
  })
})