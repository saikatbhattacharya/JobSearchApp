import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Icon } from 'antd';
import 'antd/dist/antd.css';
import './PaperBox.css';

const PaperBox = props => (
  <Card>
    <Row>
      <h3>{props.jobTitle}</h3>
      <span className="availability-tag">{props.availability}</span>
      <span className="payment">${props.payment} / hr</span>
    </Row>
    <Row>
      <Icon style={{color: '#43A3FF', fontSize: 18, marginRight: 2}} type="bank" />
      <span className="companyName">{props.companyName}</span>
      <Icon style={{color: '#00DD92', fontSize: 18, marginRight: 2}} type="environment" />
      <span className="location">{props.location}</span>
    </Row>
    <Row>
      <span className="reply-rate"><span className="reply-rate-key">Reply rate:</span> {props.replyRate}</span>
    </Row>
    <Row className="jobDescRow">
      <span className="jobDesc">{props.jobDesc}</span>
    </Row>
    <Row className="jobDescRow">
      {
        props.tags.map((each, i) => (
          <span key={i} className="job-tag">{each}</span>
        ))
      }
    </Row>
  </Card>
);

PaperBox.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  payment: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  replyRate: PropTypes.number.isRequired,
  jobDesc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

export default PaperBox;
