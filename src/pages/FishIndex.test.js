import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FishIndex from './FishIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When FishIndex renders", () => {
  it("displays a heading", () => {
    const fishIndex = shallow(<FishIndex />)
    const indexHeading = fishIndex.find("h3")
    expect(indexHeading.text()).toEqual("Meet our Fantastic Fish Friends")
  })
})