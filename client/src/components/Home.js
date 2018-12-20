import React from 'react';
import { Header, Container,} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Home = () => (
  <Container>
    <Link to="/stickies">View All Stickies</Link>
    <Header as="h3" textAlign="center">Home</Header>
  </Container>
)

export default Home