import React from 'react';
import { EditableTagGroup, Checkboxes, FilterHeader } from '../common';
import { Row, Divider, Menu, Dropdown, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const menu = (
  <Menu>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedJobTypes: []
    };
    this.jobTypes = [
      'Hourly', 'Full-time', 'Part-time'
    ];
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange = (e, index) => {
    console.log(`checked = ${e.target.checked}, index = ${index}`);
    let selectedJobTypes = this.state.selectedJobTypes;
    if (e.target.checked) {
      selectedJobTypes.push(this.jobTypes[index]);
    } else {
      selectedJobTypes.splice(
        selectedJobTypes.indexOf(this.jobTypes[index]), 1
      )
    }
    this.setState({ selectedJobTypes });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <span>FILTERS</span>
          <Divider />
        </Row>
        <Row>
          <FilterHeader name="Skills" />
          <EditableTagGroup className="tagGroup" />
        </Row>
        <Row>
          <FilterHeader name="Availability" />
          {
            this.jobTypes.map((each, index) => {
              return <React.Fragment>
                <Checkboxes key={index} label={each} index={index} onChange={this.onCheckboxChange} />
                <br />
              </React.Fragment>
            })
          }
        </Row>
        <Row>
          <FilterHeader name="Job Type" />
          <Dropdown className="menu-text" overlay={menu}>
            <Button style={{width: '100%', margin: 0}}>
              <span style={{float: 'left'}}>Select a job type</span> <Icon style={{float:'right'}} type="down" />
            </Button>
          </Dropdown>
        </Row>
      </React.Fragment>
    )
  }
}

export default LeftSideBar;