import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ClicketyClack from 'react-clicketyclack';
import '../intro/intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.openAppLaunch = this.openAppLaunch.bind(this);
  }

  openAppLaunch(e) {
    e.preventDefault();
    window.open('https://console.bluemix.net/catalog/services/app-launch?taxonomyNavigation=apps', '_blank');
    window.close();
    return false;
  }

  render() {
    const attributes = [
      'launch new features quickly.',
      'target features to a set of users.',
      'customize your app on the fly.',
      'test different variants of the features.',
      'send quick In-App messages to your users.',
      'toggle features in your app in real-time',
    ];
    const svgString = ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 867.8 285" class="logo-rocket"><defs><path id="a" d="M0 0h867.8v285H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M73 195.4c15.8 0 22.2-5.9 22.2-5.9v-4.6H120v-43.4L102.5 127v30.5s-7.2-2.1-7.1-9.6c.1-6 .1-12 0-18-.1-7.1.2-14.1-.2-21.2-1.1-18.6-4.2-37.5-12.9-54.1-2.5-4.8-9.5-16.6-15.6-8.7-4.1 5.3-6.6 11.8-9 18-2.6 6.9-4.7 14-6.3 21.1l-.3 1.5c-4.3 19.8-3 39.2-3 39.2l-24.2 23.5v26.1l23.9 3.2v19.8H53l12.2-9.5v-48.1l-4.1-1.4-9.9 23.7"/></svg>';
    const rocket = '<svg version="1.1" x="0px" y="0px" width="307px" height="283px" id="rocket"><g class="rocket_wrap"><circle cx="147.5" cy="138.6" r="105.5" class="icon_circle"/><g class="rocket_inner"><path class="fire fire_path"  id="fireMiddle" d="M148.891,179.906c3.928,0,7.111,3.176,7.111,7.094 c0,7.78-7.111,16-7.111,16s-7.111-8.349-7.111-16C141.78,183.082,144.963,179.906,148.891,179.906z"/><path class="fire_path fire" id="fireRight" d="M154.063,181.092c3.577-1.624,7.788-0.048,9.408,3.52 c3.216,7.084,0.139,17.508,0.139,17.508s-9.927-4.662-13.09-11.63C148.9,186.923,150.487,182.715,154.063,181.092z"/><path class="fire_path fire" id="fireLeft" d="M143.392,182.519c3.25,2.207,4.098,6.623,1.896,9.864 c-4.372,6.436-14.873,9.238-14.873,9.238s-1.191-10.902,3.108-17.23C135.725,181.149,140.143,180.312,143.392,182.519z"/><path class="fire_path fire" id="fireSmallLeft" d="M143.193 187.531c2.226 0.4 3.7 2.6 3.2 4.8 c-0.875 4.407-5.829 8.264-5.829 8.264s-3.09-5.53-2.229-9.865C138.807 188.5 141 187.1 143.2 187.531z"/><path class="fire_path fire" id="fireSmallRight" d="M152.089 188.599c2.043-0.985 4.496-0.132 5.5 1.9 c1.952 4 0.3 10.1 0.3 10.107s-5.795-2.56-7.713-6.541C149.186 192 150 189.6 152.1 188.599z"/><path class="rocket_bottom" d="M157.069 171.31h-3.292c-1.562-0.048-3.178-0.076-4.846-0.076 s-3.284 0.028-4.846 0.076h-3.292c-7.277-7.938-12.371-26.182-12.371-47.434c0-28.54 9.182-51.676 20.508-51.676 c11.327 0 20.5 23.1 20.5 51.676C169.44 145.1 164.3 163.4 157.1 171.31z"/><g id="right_wing_wrap"><path class="wing_base" d="M166.678 127.161c0 0 17.7 3.3 12.9 48.099l-18.06-14.05 L166.678 127.161z"/><path class="wing_shadow" d="M158.225 140.336c10.481-5.584 22.7 22.2 21.4 34.9 l-18.06-14.05C161.542 161.2 156.1 144.3 158.2 140.336z"/></g><g id="left_wing_wrap"><path class="wing_base" d="M135.131 161.21l-18.06 14.1 c-4.805-44.793 12.924-48.099 12.924-48.099L135.131 161.21z"/><path class="wing_shadow" d="M135.131 161.21l-18.06 14.1 c-1.367-12.746 10.896-40.509 21.377-34.924C140.614 144.3 135.1 161.2 135.1 161.21z"/></g><g id="rocket_body_wrap"><path class="rocket_base" d="M162.728 167.358c-3.778-0.623-8.573-0.996-13.796-0.996 s-10.018 0.373-13.795 0.996c-5.033-10.186-8.257-25.808-8.257-43.338c0-30.688 9.873-55.566 22.052-55.566 s22.053 24.9 22.1 55.566C170.984 141.6 167.8 157.2 162.7 167.358z" /><path class="rocket_shadow" d="M145.464 166.417c19.578-40.575 7.26-85.229 4.112-98.067 c11.88 0.9 21.4 25.4 21.4 55.525c0 17.529-3.225 33.152-8.257 43.337c0 0-3.786-0.472-8.069-0.697 S145.464 166.4 145.5 166.417z"/></g><g id="large_window_wrap"><radialgradient id="SVGID_2_" cx="148.9" cy="112.5" r="15.2" fx="139.4853" fy="112.5239" gradientunits="userSpaceOnUse"><stop offset="0" class="window_grandient"/><stop offset="0.5868" class="window_grandient"/><stop offset="0.6834" class="window_grandient"/><stop offset="0.6845" class="window_grandient1"/><stop offset="0.6861" class="window_grandient2"/><stop offset="0.6897" class="window_grandient3"/></radialgradient><circle class="large_window_path" cx="148.9" cy="111.3" r="10.5"/></g><circle class="small_window_path" cx="148.9" cy="132.4" r="5.2"/></g></g></svg>';
    return (
      <Row className={`${window.chrome ? 'Intro standard-padding webp-background' : 'Intro standard-padding no-webp-background'}`}>
        <Col className="intro-text" lg={6} md={6} xs={12}>
          <div className="heading">
            <h4 className="ibm-type-b">IBM</h4>
            <p className="ibm-type-light">AppLaunch</p>
          </div>
          <div className="about ibm-type-serif">Take control of feature releases to mobile applications. Control who,when and how aspects of your app features with App Launch. Gain insights by partnering with your end users early and often.
          </div>
          <Row className="intro-text">
            <Col className="attributes">
              <p>AppLaunch helps you </p>
              <ClicketyClack lines={attributes} eraseSpeed={13} pause={400} erase repeat />
            </Col>
          </Row>
        </Col>
        <Col className="intro-image" xs={1} lg={6} md={6} >
          {/* <div className="" dangerouslySetInnerHTML={{ __html: rocket }} /> */}
          <img
            src="https://raw.githubusercontent.com/ibm-cloud-applaunch/applaunch/master/src/assets/applaunch-logo.png"
            onClick={e => this.openAppLaunch(e)}
            style={{ cursor: 'pointer' }}
          />
        </Col>

      </Row>
    );
  }
}

export default Intro;
