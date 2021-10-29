import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header loads...',() => {
  it('displays three NavLinks', () => {
    const headerWrapper = shallow(<Header/>)
    const navLinkWrapper = headerWrapper.find("NavLink")
    expect(navLinkWrapper.length).toEqual(3)
  })

})