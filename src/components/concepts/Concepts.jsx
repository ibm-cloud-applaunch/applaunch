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
      autoplay: true,
      arrows: true,
    };
    return (
      <Row className="concepts-container third-section-color standard-padding">
        <Row>
          <h4 className="heading">What AppLaunch Offers</h4>
        </Row>
        <Slider {...settings} className="slider">
          <div>
            <h4 className="concepts-header">Features</h4>
            <p className="concepts-body">A feature denotes a distinctive capability or characteristics of an application. You can also define a set of properties of the feature which can define the behavior of the feature.</p>
          </div>
          <div>
            <h4 className="concepts-header">Audience</h4>
            <p className="concepts-body"> An audience is a collection of attributes that define the characteristics of a user segment. Attributes are individual characteristics of the user. The allowed values of the attributes constitue the audience.</p>
          </div>
          <div>
            <h4 className="concepts-header">Engagement</h4>
            <p className="concepts-body">Represents rolling out the feature in question to the selected audience segment at a specific time. What (Feature) > Who (Audience) > When (Time).</p>
          </div>
          <div>
            <h4 className="concepts-header">Metrics</h4>
            <p className="concepts-body">Metrics is the key performance indicator for a feature or In-App message. This will help you decide the performance of the engagements.</p>
          </div>
        </Slider>
      </Row>
    );
  }
}

export default Concepts;
