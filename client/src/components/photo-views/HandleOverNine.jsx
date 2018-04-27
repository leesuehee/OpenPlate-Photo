import React from 'react';

let Handle_over_nine = function(props) {
  let pic = props.pic;
  let abs = 'absolute';
  let zero = '0px'

  // medium photos
  let styles1 = {position: abs,top:zero,left:'2px'};
  let styles2 = {position: abs,top:'137px',left:zero};
  // large photo
  let styles3 = {position: abs,top:zero,left:'135px'};
  // small photos located top row
  let styles4 = {position: abs,top: zero,left:'409px'};
  let styles5 = {position: abs,top: zero,left:'500px'};
  // small photos located mid row
  let styles6 = {position: abs,top: '93px',left:'405px'};
  let styles7 = {position: abs,top: '93px',left:'496px'};
  // small photos located bottom row 
  let styles8 = {position: abs,top: '185px',left:'401px'};
  let styles9 = {position: abs,top: '185px',left:'491px'};

  return (
    <div className = 'photogallery'>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles1}>
          <img className = 'pic' src = {pic[0].src} height = '135px' width = '135px'/>
          <p className = 'text'> {pic[0].txt_description}</p>
        </div>  
      </div>         
      
      <div className = 'photo'>
        <div className = 'pic-wrapper'  style = {styles2}>
          <img className = 'pic' src = {pic[1].src} height = '135px' width = '135px'/>
          <p className = 'text'> {pic[1].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles3}>
          <img className = 'pic' src = {pic[2].src} height = '274px' width = '274px'/>
          <p className = 'text'> {pic[2].txt_description}</p>
        </div>
      </div>
  
      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles4}>
          <img className = 'pic' src = {pic[3].src} height = '90px' width = '90px'/>
          <p className = 'text'> {pic[3].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles5}>
          <img className = 'pic' src = {pic[4].src} height = '90px' width ='90px'/>
          <p className = 'text'> {pic[4].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles6}>
          <img className = 'pic' src = {pic[5].src} height = '90px' width ='90px'/>
          <p className = 'text'> {pic[5].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles7}>
          <img className = 'pic' src = {pic[6].src} height = '90px' width ='90px'/>
          <p className = 'text'> {pic[6].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles8}>
          <img className = 'pic' src = {pic[7].src} height = '90px' width ='90px'/>
          <p className = 'text'> {pic[7].txt_description}</p>
        </div>
      </div>

      <div className = 'photo more'>
        <div className = 'pic-wrapper' style = {styles9}>
          <img className = 'pic' src = {pic[8].src} height = '90px' width ='90px'/>
        </div>
      </div>
      <p className = 'excess'>+{pic.length-8} more </p>
    </div>
  ) 
};

export default Handle_over_nine;