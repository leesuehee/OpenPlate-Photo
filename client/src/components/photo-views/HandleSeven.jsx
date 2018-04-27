import React from 'react';

let Handle_seven = function(props) {
  let pic = props.pic;
  let abs = 'absolute';
  let zero = '0px'
  //med
  let styles1 = {position: abs,top:zero,left:'2px'}
  let styles2 = {position: abs,top:'123px',left:zero}
  //large
  let styles3 = {position: abs,top:zero,left:'120px'}
  //med
  let styles4 = {position: abs,top:zero,left:'363px'}
  let styles5 = {position: abs,top:'123px',left:'361px'}
  let styles6 = {position: abs,top:zero,left:'481px'}
  let styles7 = {position: abs,top:'123px',left:'480px'}

  return (
    <div className = 'photogallery'>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles1}>
          <img className = 'pic' src = {pic[0].src} height = '120px' width = '120px'/>
          <p className = 'text'> {pic[0].txt_description}</p>
        </div>  
      </div>         
      
      <div className = 'photo'>
        <div className = 'pic-wrapper'  style = {styles2}>
          <img className = 'pic' src = {pic[1].src} height = '120px' width = '120px'/>
          <p className = 'text'> {pic[1].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles3}>
          <img className = 'pic' src = {pic[2].src} height = '243px' width = '243px'/>
          <p className = 'text'> {pic[2].txt_description}</p>
        </div>
      </div>
  
      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles4}>
          <img className = 'pic' src = {pic[3].src} height = '120px' width = '120px'/>
          <p className = 'text'> {pic[3].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles5}>
          <img className = 'pic' src = {pic[4].src} height = '120px' width ='120px'/>
          <p className = 'text'> {pic[4].txt_description}</p>
        </div>
      </div>

        <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles6}>
          <img className = 'pic' src = {pic[5].src} height = '120px' width ='120px'/>
          <p className = 'text'> {pic[5].txt_description}</p>
        </div>
      </div>

        <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles7}>
          <img className = 'pic' src = {pic[6].src} height = '120px' width ='120px'/>
          <p className = 'text'> {pic[6].txt_description}</p>
        </div>
      </div>

    </div>
  )
};

export default Handle_seven;