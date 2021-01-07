import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export default function Data({ info }) {
  return (
    <>
      <div className="stats">
        {info.map(i => (
          <div key={i.idReport} className="stat">
            <Row>
              <Col xs={6} md={2}>
                <p>{i.publicationType}</p>
              </Col>
              <Col xs={6} md={2}>
                <p>{i.termType}</p>
              </Col>
              <Col xs={6} md={2}>
                <p>{i.reportGroup}</p>
              </Col>
              <Col xs={6} md={2}>
                <p>{i.reportState}</p>
              </Col>
              <Col xs={6} md={2}>
                <p>{i.reportFormat}</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
}

Data.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
