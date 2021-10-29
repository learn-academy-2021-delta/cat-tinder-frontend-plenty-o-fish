import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import FishIndex from './pages/FishIndex'
import fish from './MockFish.js'


Enzyme.configure({ adapter: new Adapter() })
describe("When the app renders", () => {
  it("displays a header and footer", () => {
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route "/" to the home component', () => {
    const renderedApp = shallow(<App/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
  it('provides a route "/fishindex" to the FishIndex component', () => {
    const renderedApp = shallow(<App/>)
    const renderedFishIndexRoute = renderedApp.find('[path="/fishindex"]')
    expect(renderedFishIndexRoute.props().render()).toEqual(<FishIndex fish={fish} />)
  })
})