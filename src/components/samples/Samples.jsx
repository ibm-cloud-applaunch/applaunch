import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './Samples.css';

const SamplesData = [
  {
    title: 'Ask Poll',
    subTitle: 'A sample app showing basic concepts of App Launch',
    imageUrl: 'https://raw.githubusercontent.com/ibm-cloud-applaunch/applaunch/master/src/assets/askpoll.png',
    githubLink: 'https://github.com/ibm-cloud-applaunch/sample-swift-poll',
    readmeLink: 'https://raw.githubusercontent.com/ibm-cloud-applaunch/sample-swift-poll/master/README.md',
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
    readmeLink: 'https://raw.githubusercontent.com/SangeetManghnani/vroom/master/README.md',
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
          <CardMedia>
            <img src="https://raw.githubusercontent.com/ibm-cloud-applaunch/applaunch/master/src/assets/askpoll.png" alt="" />
          </CardMedia>
          <CardTitle title={sample.title} />
          <CardText>
            {sample.subTitle}
          </CardText>
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
      <div className="samples-container ibm-greenBg standard-padding">
        <Row >
          <div >
            <p className="samples-header ibm-text-color">Samples</p>
            <p className="samples-subheader ibm-text-color">To get you started quickly!</p>
          </div>
        </Row>
        <Row className="samples-card-container">
          {this.renderSamplesCards()}
        </Row>
      </div>
    );
  }
}

export default Samples;
