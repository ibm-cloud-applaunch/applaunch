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
      <div className="sample-detail-page">
        <ReactMarkdown source={this.state.readmeData} />
      </div>
    );
  }
}

export default SampleDetailPage;
