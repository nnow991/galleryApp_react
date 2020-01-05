import React, { Component } from 'react';

class Images extends Component {
  render() {
    return (
        <div className="images"><img src={this.props.image} width='300px' height='300px' alt="picture"></img></div>
    );
  }
}

export default Images;
