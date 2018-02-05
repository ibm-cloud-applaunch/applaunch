import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'carbon-components-react';
import './Samples.css';

const SamplesData = [
  {
    title: 'Ask Poll',
    subTitle: 'A sample app showing basic concepts of App Launch',
    imageUrl: '',
    githubLink: '',
    readmeLink: '',
  },
  {
    title: 'Health Is Wealth',
    subTitle: 'A sample app showing basic concepts of App Launch',
    imageUrl: '',
    githubLink: '',
    readmeLink: '',
  },
  {
    title: 'New Flash',
    subTitle: 'A sample app showing basic concepts of App Launch',
    imageUrl: '',
    githubLink: '',
    readmeLink: '',
  },
  {
    title: 'Bike Rental',
    subTitle: 'A sample app showing basic concepts of App Launch',
    imageUrl: '',
    githubLink: '',
    readmeLink: '',
  },
];

const defaultProps = {
  showSampleDetail: () => {},
};

class Samples extends Component {
  constructor(params) {
    super(params);
    this.renderSamplesCards = this.renderSamplesCards.bind(this);
  }

  renderSamplesCards() {
    const sampleList = [];
    SamplesData.map((sample, index) => {
      sampleList.push(<Col lg={3} md={4} sm={6} xs={12} key={index}>
        <Card className="custom-card" onClick={() => this.props.showSampleDetail(sample)}>
          <div className="title">{sample.title}</div>
          <div className="sub-title">{sample.subTitle}</div>
        </Card>
      </Col>);
    });

    return (
      <Row>
        {sampleList}
      </Row>
    );
  }

  render() {
    return (
      <Grid fluid className="samples-container">
        <Row>
          <div >
            <p className="samples-header">Samples</p>
            <p className="samples-subheader">To get you started quickly!</p>
          </div>
        </Row>
        <br />
        <Row className="samples-card-container">
          {this.renderSamplesCards()}
        </Row>

      </Grid>

    );
  }
}

export default Samples;
