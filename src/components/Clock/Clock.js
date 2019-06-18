import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return ( <div className = "Clock" >
      <h1> Clock </h1>
      <h2 > It is {this.state.date.toLocaleTimeString()}</h2></div>
    )
  }
}
Clock.propTypes = {}

export default Clock;