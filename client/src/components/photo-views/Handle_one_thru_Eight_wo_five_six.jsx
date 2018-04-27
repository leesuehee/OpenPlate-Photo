import React from 'react';

let Handle_one_thru_Eight_wo_five_seven = function(props) {
  let hsize;
  let wsize;
  let photos = props.pic;
  let photoLen = photos.length

  switch(photoLen){
    case 1:
      hsize = '400px'; wsize = '600px'; break; // warped
    case 2:
      hsize = '275px'; wsize = '297px'; break;
    case 3:
      hsize = '200px'; wsize = '198px'; break;
    case 4:
      hsize = '160px'; wsize = '148px'; break;
    case 6:
      hsize = '170px'; wsize = '198px'; break; // midd line needs adjustment
    case 8:
      hsize = '148px'; wsize = hsize; break;
  };

  return (
    <div className = 'photogallery' width = "600px" height = "300px">
      {photos.map(pic => 
        <div className = 'photo' key = {pic.pictureId} >
          <img className = 'pic' src = {pic.src} height = {hsize} width = {wsize}
          />
          <p className = 'text'>{pic.txt_description}</p>
        </div>
      )}
    </div>
  )
};
