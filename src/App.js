import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FishIndex from './pages/FishIndex'
import FishShow from './pages/FishShow'
import FishNew from './pages/FishNew'
import FishEdit from './pages/FishEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'

import fish from './MockFish.js'


 class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        fish: fish
      }
    }
  
  render() {
    return (
    
<Router>
  <Header/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/fishindex" render={(props) => <FishIndex fish={this.state.fish}/>} />
    
          <Route
            path="/fishshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let fish = this.state.fish.find(c => c.id === +id)
              return <FishShow fish={fish} />
            }}
          />
    <Route path="/fishshow" component={FishShow} />
    <Route path="/fishnew" component={FishNew} />
    <Route path="/fishedit" component={FishEdit} />
    <Route component={NotFound}/>
    </Switch>
    <Footer/>
</Router>
      
    )
  }
}

export default App

