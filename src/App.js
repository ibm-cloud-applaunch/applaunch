import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Intro from './components/intro/Intro';
import Features from './components/features/Features';
import Concepts from './components/concepts/Concepts';
import Samples from './components/samples/Samples';
import SampleDetailPage from './components/sampleDetailPage/SampleDetailPage';

class App extends Component {
  constructor(params) {
    super(params);
    this.showSampleDetailPage = this.showSampleDetailPage.bind(this);
    this.hideSampleDetailPage = this.hideSampleDetailPage.bind(this);
    this.state = {
      shouldShowSampleDetails: false,
      selectedSample: {},
    };
  }

  hideSampleDetailPage() {
    this.setState({
      shouldShowSampleDetails: false,
      selectedSample: {},
    });
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
        <MuiThemeProvider>
          {this.state.shouldShowSampleDetails ?
          <SampleDetailPage sample={this.state.selectedSample} cancel={this.hideSampleDetailPage} />
        :
          <div>
            <Intro />
            <Features />
            <Concepts />
            <Samples showSampleDetail={this.showSampleDetailPage} />
          </div>
        }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
