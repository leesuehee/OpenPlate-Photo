import React from 'react';
import Handle_majority from './photo-views/HandleMajority.jsx';
import Handle_five from './photo-views/HandleFive.jsx';
import Handle_seven from './photo-views/HandleSeven.jsx';
import Handle_nine from './photo-views/HandleNine.jsx';
import Handle_over_nine from './photo-views/HandleOverNine.jsx';

let Photo = function(props) {
  let photoLength = props.photos.length; 

  switch(photoLength) {
    case 1  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ;  
    case 2  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ; 
    case 3  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ; 
    case 4  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ; 
    case 5  : return (<div> <Handle_five       pic={props.photos}/> </div>) ; 
    case 6  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ; 
    case 7  : return (<div> <Handle_seven      pic={props.photos}/> </div>) ; 
    case 8  : return (<div> <Handle_majority   pic={props.photos}/> </div>) ; 
    case 9  : return (<div> <Handle_nine       pic={props.photos}/> </div>) ; 
    default : return (<div> <Handle_over_nine  pic={props.photos}/> </div>) ; 
  }
};

export default Photo;
