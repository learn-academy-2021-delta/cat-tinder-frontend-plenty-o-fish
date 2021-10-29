import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })
 
describe('When Footer loads...',() => {
  it('displays three NavLinks', () => {
    const footerWrapper = shallow(<Footer/>)
    const navLinkWrapper = footerWrapper.find("NavLink")
    expect(navLinkWrapper.length).toEqual(3)
  })

})