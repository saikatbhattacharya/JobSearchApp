import React from 'react';
import { EditableTagGroup, Checkboxes, FilterHeader, SliderComponent } from '../common';
import { FilterContext } from '../../contexts'
import { Row, Divider, Select, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const Option = { Select };

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedJobTypes: '',
      selectedPayRate: [],
      selectedSkills: [],
      selectedAvailability: []
    };
    this.availability = [
      'Hourly', 'Full-time', 'Part-time'
    ];
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.handleJobTypeChange = this.handleJobTypeChange.bind(this);
    this.payRateChange = this.payRateChange.bind(this);
    this.handleTagInput = this.handleTagInput.bind(this);
  }

  onCheckboxChange = (e, index) => {
    console.log(`checked = ${e.target.checked}, index = ${index}`);
    let { selectedAvailability } = this.state;
    if (e.target.checked) {
      selectedAvailability = [...selectedAvailability ,this.availability[index]];
    } else {
      selectedAvailability.splice(
        selectedAvailability.indexOf(this.availability[index]), 1
      )
    }
    this.setState({ selectedAvailability });
  }

  handleJobTypeChange = (value) => {
    this.setState({ selectedJobTypes: value });
  }
  payRateChange = (selectedPayRate) => {
    this.setState({ selectedPayRate });
  }
  handleTagInput = (selectedSkills) => {
    this.setState({ selectedSkills })
  }

  render() {
    return (
      <React.Fragment>
        <Row key={0}>
          <span>FILTERS</span>
          <Divider />
        </Row>
        <Row key={1}>
          <FilterHeader name="Skills" />
          <EditableTagGroup className="tagGroup" handleTagInput={this.handleTagInput} />
        </Row>
        <Row key={2}>
          <FilterHeader name="Availability" />
          <div className="availibility">
          {
            this.availability.map((each, index) => {
              return <React.Fragment>
                <Checkboxes key={index} label={each} index={index} onChange={this.onCheckboxChange} />
                <br key={1000} />
              </React.Fragment>
            })
          }
          </div>
        </Row>
        <Row key={3}>
          <FilterHeader name="Job Type" />
          <Select
            style={{ width: '100%', margin: 0, height: 45, fontSize: 11, fontWeight: 100 }}
            onChange={this.handleJobTypeChange}
            placeholder="Select a jobtype"
            optionFilterProp="children"
          >
            <Option value="it">IT</Option>
            <Option value="non-it">non-IT</Option>
          </Select>
        </Row>
        <Row key={4} className="pay-rate-filter">
          <FilterHeader name="Pay Rate / hr ($)" />
          <SliderComponent payRateChange={this.payRateChange} />
        </Row>
        <Row key={5}>
          <FilterContext.Consumer>
            {context => (
              <Button className="apply-button" type="primary" onClick={() => context.applyFilter(this.state)}>
                Apply Filters<Icon type="right" />
              </Button>
            )
            }
          </FilterContext.Consumer>>
        </Row>
      </React.Fragment>
    )
  }
}

export default LeftSideBar;