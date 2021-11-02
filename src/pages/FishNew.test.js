import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import FishNew from "./FishNew"

Enzyme.configure({ adapter: new Adapter() })

describe("When FishNew renders", () => {
    it("displays a form", () => {
      const fishNew = shallow(<FishNew />)
      const formGroup = fishNew.find("FormGroup")
      expect(formGroup.length).toEqual(3)
      const label = fishNew.find("Label")
      expect(label.length).toEqual(3)
      const input = fishNew.find("Input")
      expect(input.length).toEqual(3)
    })
  })