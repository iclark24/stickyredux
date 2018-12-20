import React from 'react';
import { connect, } from 'react-redux';
import {Header, Form, Input, TextArea, Button} from "semantic-ui-react"

class EditSticky extends React.Component {

  
  state = { title: this.props.title, body: this.props.body,};
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, body } = this.state;
    const blog = { name, id, body, editing: false };
    dispatch({ type: 'EDIT_BLOG', blog, });
  }

  render() {
    const { name, body} = this.state;

    return (
      <div>
        <Header as="h1">Edit Blog</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
          <Input name="name" value={name} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <TextArea name="body" value={body} onChange={this.handleChange} />
          </Form.Field>
          <Button color="green">Submit</Button>
        </Form>
      </div>
    )
  }
}


export default connect()(EditSticky);