import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';
import Stickies from './Stickies';
import Sticky from './Sticky';
import { getStickies, } from '../reducers/stickies';
import { Header, Segment, Dimmer, } from 'semantic-ui-react';

class FetchStickies extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    this.props.dispatch(getStickies(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {

      return (
        <div>
          <Route exact path="/stickies" component={Stickies}/>
          <Route exact path="/stickies/:id" component={Sticky} />
        </div>
      )
    }
          
}

export default connect()(FetchStickies);