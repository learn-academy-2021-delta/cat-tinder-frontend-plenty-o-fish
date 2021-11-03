import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FishIndex from "./pages/FishIndex";
import FishShow from "./pages/FishShow";
import FishNew from "./pages/FishNew";
import FishEdit from "./pages/FishEdit";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// import fish from "./MockFish.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: [],
    };
  }

  componentDidMount() {
    this.readFish();
  }
  readFish = () => {
    fetch("http://localhost:3000/fish")
      .then((response) => response.json())
      .then((fishArray) => this.setState({ fish: fishArray }))
      .catch((errors) => console.log(errors));
  };

  createFish = (newFish) => {
    fetch("http://localhost:3000/fish", {
      body: JSON.stringify(newFish),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log(errors));
  };

  updateFish = (editedFish, id) => {
    fetch(`http://localhost:3000/fish/${id}`, {
      body: JSON.stringify(editedFish),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readFish())
      .catch((errors) => console.log(errors));
  };

  deleteFish = (id) => {
    fetch(`http://localhost:3000/fish/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readFish())
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/fishindex"
            render={(props) => <FishIndex fish={this.state.fish} />}
          />

          <Route
            path="/fishshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let fish = this.state.fish.find((f) => f.id === +id);
              return <FishShow fish={fish} deleteCat={this.deleteCat}/>;
            }}
          />
          <Route path="/fishshow" component={FishShow} />
          <Route
            path="/fishnew"
            render={(props) => <FishNew createFish={this.createFish} />}
          />
            <Route
              path="/fishedit/:id"
              render={(props) => {
                let id = props.match.params.id
                let fish = this.state.fish.find(c => c.id === +id)
                return <FishEdit fish={fish} updateFish={this.updateFish } id={id} />
              }}
            />
          <Route path="/fishedit" component={FishEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
