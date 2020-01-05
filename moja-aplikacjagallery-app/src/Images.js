import React, { Component } from 'react';

class Images extends Component {
  render() {
    return (
        <img src={this.props.image} width='300px' height='300px' alt="picture"></img>
    );
  }
}

export default Images;
