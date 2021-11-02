import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class FishNew extends Component {
    constructor(props){
        super(props)
        this.state = {
          form: {
            name: "",
            age: "",
            enjoys: ""
          },
          submitted: false
        }
      }
    
      handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
      }
    
      handleSubmit = () => {
        this.props.createFish(this.state.form)
        this.setState({submitted: true})
      }

  render() {
    return (
      <>
        <h3>I am the New</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Fishes Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Fishes Age
            </Label>
            <Input
              name="age"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Fishes Hobbies and Enjoyment
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Add a New fish
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/fishindex"/>}
      </>
    );
  }
}
