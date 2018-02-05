import React, { Component } from 'react';
import Samples from './components/samples/Samples';
import SampleDetailPage from './components/sampleDetailPage/SampleDetailPage';

class App extends Component {
  constructor(params) {
    super(params);
    this.showSampleDetailPage = this.showSampleDetailPage.bind(this);
    this.state = {
      shouldShowSampleDetails: false,
      selectedSample: {},
    };
  }

  showSampleDetailPage(sample) {
    this.setState({
      shouldShowSampleDetails: true,
      selectedSample: sample,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.shouldShowSampleDetails ?
          <SampleDetailPage sample={this.state.selectedSample} />
        :
          <Samples showSampleDetail={this.showSampleDetailPage} />
        }
      </div>
    );
  }
}

export default App;
