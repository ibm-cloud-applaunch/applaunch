import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Features.css';

class Features extends Component {
  render() {
    const featureIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve"><g><g id="Rectangle_4"><g><path d="M432.621,369.312H52.759v21.104h379.862V369.312z M358.759,316.552h-306v21.104h306V316.552z M485.379,263.793H52.759     v21.104h432.62V263.793z M73.862,137.173c-11.66,0-21.104,9.455-21.104,21.104c0,11.66,9.444,21.104,21.104,21.104     c11.659,0,21.103-9.444,21.103-21.104C94.965,146.627,85.521,137.173,73.862,137.173z M569.793,94.966H42.207     C18.898,94.966,0,113.864,0,137.173v337.654c0,23.311,18.898,42.207,42.207,42.207h527.586c23.309,0,42.207-18.896,42.207-42.207     V137.173C612,113.864,593.102,94.966,569.793,94.966z M590.896,453.726c0,23.309-8.347,42.205-31.655,42.205H63.311     c-23.309,0-42.207-18.896-42.207-42.205V221.587h569.793V453.726z M590.896,200.483H21.104v-42.207     c0-23.309,18.898-42.207,42.207-42.207h495.931c23.309,0,31.655,18.898,31.655,42.207V200.483z M200.483,137.173     c-11.66,0-21.104,9.444-21.104,21.104s9.444,21.104,21.104,21.104s21.104-9.444,21.104-21.104     C221.586,146.627,212.143,137.173,200.483,137.173z M137.172,137.173c-11.66,0-21.104,9.444-21.104,21.104     s9.444,21.104,21.104,21.104c11.649,0,21.104-9.444,21.104-21.104C158.276,146.627,148.832,137.173,137.172,137.173z      M306,422.069H52.759v21.104H306V422.069z" fill="#FFFFFF"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    return (
      <Row className="Features standard-padding second-section-color ibm-text-color">
        <Row className="heading">
          <h4>What AppLaunch Offers!</h4>
        </Row>
        <Col lg={4} md={4} xs={12} className="feature-item">
          <div className="icon" dangerouslySetInnerHTML={{ __html: featureIcon }} />
          <h4>Features</h4>
          <p>It helps you create awesome features</p>
        </Col>
        <Col lg={4} md={4} xs={12} className="feature-item">
          <div className="icon" dangerouslySetInnerHTML={{ __html: featureIcon }} />
          <h4>Audiences</h4>
          <p>It helps you create awesome features</p>
        </Col>
        <Col lg={4} md={4} xs={12} className="feature-item">
          <div className="icon" dangerouslySetInnerHTML={{ __html: featureIcon }} />
          <h4>Engagements</h4>
          <p>It helps you create awesome features</p>
        </Col>
      </Row>
    );
  }
}

export default Features;
