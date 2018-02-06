import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from 'carbon-components-react';

import Slider from 'react-slick';

import './Concepts.css';

class Concepts extends Component {
  constructor(params) {
    super(params);
  }
  componentDidMount() {
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    };
    return (
      <Grid fluid className="concepts-container">
        <Row>
          {/* <div >
            <p className="concepts-header">Core Concepts</p>
            <p className="concepts-subheader">To help you quickly understand AppLaunch!</p>
          </div> */}

          <Slider {...settings} className="slider">
            <div>
              <p className="concepts-subheader">CORE CONCEPTS</p>
              <p className="concepts-header">Features</p>
              <p className="concepts-body">Core Concepts</p>
            </div>
            <div>
              <p className="concepts-subheader">CORE CONCEPTS</p>
              <p className="concepts-header">Features</p>
              <p className="concepts-body">Core Concepts</p>
            </div>
            <div>
              <p className="concepts-subheader">CORE CONCEPTS</p>
              <p className="concepts-header">Features</p>
              <p className="concepts-body">Core Concepts</p>
            </div>
            <div>
              <p className="concepts-subheader">CORE CONCEPTS</p>
              <p className="concepts-header">Features</p>
              <p className="concepts-body">Core Concepts</p>
            </div>
          </Slider>
        </Row>
      </Grid>
    );
  }
}

export default Concepts;
