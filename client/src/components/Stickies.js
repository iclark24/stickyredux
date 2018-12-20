import React from 'react';
import { connect } from 'react-redux';
import { Link, } from 'react-router-dom';
import StickyForm from "./StickyForm"
import { Container, Header, Card, Button, } from 'semantic-ui-react';

class Stickies extends React.Component {

  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  stickies = () => {
    let {stickies} = this.props;
    return stickies.map( sticky =>
      <Card key={ sticky.id } raised style={{backgroundColor:`${sticky.color}`, transform: "rotate(-3deg)"}}>
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
        <Card.Content extra>
          <Link to={`/stickies/${sticky.id}`}>
            View Sticky
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const {showForm,} = this.state

    return (
      <Container>
        <Header as="h1" textAlign="center">Stickies</Header>
        <Button color="blue" onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'New Sticky' }
        </Button>
        { showForm ?
            <StickyForm closeForm={this.toggleForm} />
          :
          <Card.Group centered itemsPerRow={4}>
           { this.stickies() }
          </Card.Group>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { stickies: state.stickies, };
  }

export default connect(mapStateToProps)(Stickies);