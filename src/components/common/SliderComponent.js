import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Slider, InputNumber } from 'antd';

class SliderComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      startValue: 0,
      endValue: 40
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      startValue: value[0],
      endValue: value[1]
    });
    this.props.payRateChange(value);
  }

  handleNumberChange(value, position) {
    this.setState({
      [position]: value
    })
  }

  render() {
    return (
      <div>
        <Slider range step={1} value={[this.state.startValue, this.state.endValue]} onChange={this.onChange} />
        <div>
          <InputNumber style={{ width: 45, marginRight: 20 }} min={0} max={100} value={this.state.startValue} onChange={(value) => this.handleNumberChange(value, 'startValue')} />
          <span style={{ width: 40, marginRight: 20 }}>-</span>
          <InputNumber style={{ width: 45, marginLet: 20 }} min={0} max={100} value={this.state.endValue} onChange={(value) => this.handleNumberChange(value, 'endValue')} />
        </div>
      </div>
    )
  }
}

SliderComponent.propTypes = {
  payRateChange: PropTypes.func.isRequired
}

export default SliderComponent;