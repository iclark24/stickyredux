import React from 'react';
import { connect, } from 'react-redux'
import { updateStickies, addStickies, } from '../reducers/stickies'
import { Form, Card } from 'semantic-ui-react';

class StickyForm extends React.Component {
  initialState = {};

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props, });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });


  handleSubmit = (e) => {
    e.preventDefault();
    const sticky = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateStickies : addStickies;
    dispatch(func(sticky));
    closeForm();
  }

  render() {
    const { title, body, complete } = this.props;
    const { color, } = this.state;


    return (


      <Card raised style={{backgroundColor:`${color}`, transform: "rotate(-3deg)"}}>
      <Card.Content>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.TextArea
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
          autoHeight
        />
        <Form.Select
          label="Color"
          name="color"
          value={color}
          onChange={this.handleChange}
          options={colorOptions}
        />
        <Form.Button color="green">Save</Form.Button>
      </Form>
      </Card.Content>
    </Card>
    )
  }
}

const colorOptions = [
  { key: 1, text: "White", value: "White", },
  { key: 2, text: "Yellow", value: "Yellow", },
  { key: 3, text: "Lime", value: "Lime", },
  { key: 4, text: "Blue", value: "Blue", },
  { key: 5, text: "Red", value: "Red", },
  { key: 6, text: "Purple", value: "Purple", },
  { key: 7, text: "Pink", value: "Pink", },
  { key: 8, text: "Cyan", value: "Cyan", },
  { key: 9, text: "Salmon", value: "Salmon", },


];

export default connect()(StickyForm);