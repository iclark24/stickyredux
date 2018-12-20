import React from 'react';
import { Header, Container,} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const NoMatch = () => (
  <Container>
    <Link to="/blogs">View All Stickies</Link>
    <Header as="h3" textAlign="center">404 Page Not Found</Header>
  </Container>
)

export default NoMatch