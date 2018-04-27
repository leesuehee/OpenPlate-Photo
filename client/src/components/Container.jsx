import React from 'react';
import Photo from './Photo.jsx';

let Container = function(props) {
  return (
    <div className = "container" onClick = {props.carousel} >
      <Photo photos = {props.photos}/>
    </div>
  )
}

export default Container; 