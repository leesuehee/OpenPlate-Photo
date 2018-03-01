import React from 'react';
import Photo from './Photo.jsx';

class Container extends React.Component{
  constructor(props) {
    super(props) 
  }

  render() {

    return (
      <div className = "container">
        <Photo photos = {this.props.photos} click = {this.props.click}/>
      </div>
    )
  }
}
module.exports = Container; 