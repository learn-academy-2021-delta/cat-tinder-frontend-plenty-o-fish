import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class FishEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
          form: {
            name: this.props.fish ? this.props.fish.name : "",
            age: this.props.fish ? this.props.fish.age : "",
            enjoys: this.props.fish ? this.props.fish.enjoys : "",
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
        this.props.updateFish(this.state.form, this.props.id)
        this.setState({submitted: true})
      }
      ender() {

        return (
          <div className="page-body">
            <h3>Update Fish Information</h3>
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
                  type="number"
                  min="0"
                  max="20"
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
                Update Fish
              </Button>
            </Form>
            {this.state.submitted && <Redirect to={`/fishshow/${this.props.fish.id}`} />}
          </div>
        )
      }
    }