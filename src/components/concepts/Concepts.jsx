import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from 'carbon-components-react';
import './Concepts.css';

class Concepts extends Component {
  constructor(params) {
    super(params);
  }
  componentDidMount() {
  }


  render() {
    return (
      <Grid fluid className="concepts-container">
        <Row>
          <div >
            <p className="concepts-header">Core Concepts</p>
            <p className="concepts-subheader">To help you quickly understand AppLaunch!</p>
          </div>
        </Row>
        <br />

      </Grid>
    );
  }
}

export default Concepts;
