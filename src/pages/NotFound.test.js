import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("when notfound renders", () => {
    it("displays a heading", () => {
      const notFound = shallow(<NotFound />)
      const notFoundHeading = notFound.find("h3")
      expect(notFoundHeading.text()).toEqual("Just NotFound")
    })

  }) 