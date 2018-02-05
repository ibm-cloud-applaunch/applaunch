import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
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
      <div id="markdown" className="sample-detail-page standard-padding">
        <div className="markdown-body">
          <ReactMarkdown source={this.state.readmeData} />
        </div>
      </div>
    );
  }
}

export default SampleDetailPage;
