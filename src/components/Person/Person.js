import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Person">
        <p>Hola soy un componente Person: {this.props.name}</p>
      </div>
    )
  }
}
Person.propTypes = {
}

export default Person;