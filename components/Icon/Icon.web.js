import React from 'react';

export default class Icon extends React.Component {
  render() {
    const className = "fa fa-" + this.props.name
    return <span className={ className } />
  }
}
