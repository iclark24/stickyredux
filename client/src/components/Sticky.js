import React from 'react';
import { connect, } from 'react-redux';
import { Button, Card, Container, Segment, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import StickyForm from "./StickyForm"
import {deleteStickies} from "../reducers/stickies"

class Sticky extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  handleDelete = () => {
    const { sticky, dispatch, history: { push, }, } = this.props;
    dispatch(deleteStickies(sticky.id));
    push("/stickies");
  }

  render() {
    const { showForm, } = this.state;
    const { sticky = {}, } = this.props;

    return (
    <Container>
      <Link to="/stickies">View All Stickies</Link>
      <Button color="orange" onClick={this.toggleForm}>
        { showForm ? 'Cancel' : 'Edit' }
      </Button>
      <Button color="red" onClick={this.handleDelete}>
        Delete
      </Button>
      { showForm ?
        <StickyForm {...sticky} closeForm={this.toggleForm} />
      :
      <Card key={ sticky.id } centered raised style={{backgroundColor:`${sticky.color}`, transform: "rotate(-3deg)"}}>
      <Card.Content>
        <h2 style={{display:"flex", justifyContent:"space-between"}}>
          <div>{sticky.title}</div>
          <div style={{backgroundColor:"white", width:"20px", borderRadius:"20px", height:"20px", float:"right", display:"flex", justifyContent:"center", alignItems:"center", }}>
            <div style={{backgroundColor:"darkGrey", width:"10px", borderRadius:"10px", height:"10px", float:"right"}}/>
            </div>
        </h2>
        <Card.Description>
          { sticky.body }
        </Card.Description>
      </Card.Content>
    </Card>
      }
  </Container>
)


    }
  }
    

const mapStateToProps = (state, props) => {
  return { sticky: state.stickies.find( s => s.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Sticky); 