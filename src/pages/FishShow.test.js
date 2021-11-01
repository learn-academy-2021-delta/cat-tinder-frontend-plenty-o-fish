import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FishShow from './FishShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When FishShow renders", () => {
  it("displays a heading", () => {
    const fishShow = shallow(<FishShow />)
    const showHeading = fishShow.find("h3")
    expect(showHeading.text()).toEqual("Fish Details")
  })
})