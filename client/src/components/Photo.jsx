import React from 'react';
import Handle_majority from './photo-views/HandleMajority.jsx';
import Handle_five from './photo-views/HandleFive.jsx';
import Handle_seven from './photo-views/HandleSeven.jsx';
import Handle_nine from './photo-views/HandleNine.jsx';
import Handle_over_nine from './photo-views/HandleOverNine.jsx';

let Photo = function(props) {
  let photoLength = props.photos.length; 

  if (photoLength <=8 && photoLength !==5 && photoLength !==7) {
    return (
      <div> 
        <Handle_majority pic={props.photos}/> 
      </div>
    );  
  } else if(photoLength === 5) {
    return (
      <div> 
        <Handle_five pic={props.photos}/> 
      </div>
    );
  } else if(photoLength === 7) {
    return (
      <div> 
        <Handle_seven pic={props.photos}/> 
      </div>
    );
  } else if(photoLength === 9) {
    return (
      <div> 
        <Handle_nine pic={props.photos}/> 
      </div>
    );
  } else {
    return (
      <div> 
        <Handle_over_nine  pic={props.photos}/> 
      </div>
    );
  };
};

export default Photo;
