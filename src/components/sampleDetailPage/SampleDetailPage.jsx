import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Row, Col } from 'react-flexbox-grid';
import { Icon } from 'carbon-components-react';
import axios from 'axios';
import './SampleDetailPage.css';

class SampleDetailPage extends Component {
  constructor(params) {
    super(params);
    this.state = {
      readmeData: '',
    };
    this.getReadmeData = this.getReadmeData.bind(this);
  }
  componentDidMount() {
    this.getReadmeData();
  }

  getReadmeData() {
    axios.get(this.props.sample.readmeLink)
      .then((response) => {
        console.log('got data');
        this.setState({
          readmeData: response.data,
        });
      })
      .catch((err) => {
        console.log('got error');
      });
  }

  render() {
    return (
      <div className="sample-detail-page standard-padding">
        <Row middle="xs" >
          <Col xs={2} md={1} className="back-icon" onClick={() => this.props.cancel()}>
            <Icon name="arrow--left" />
          </Col>
          <Col xs={11}>
            <h2>IBM Cloud App Launch</h2>
          </Col>
        </Row>

        <div id="markdown" >
          <div className="markdown-body">
            <ReactMarkdown
              source={this.state.readmeData}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SampleDetailPage;
