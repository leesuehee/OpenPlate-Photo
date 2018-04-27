import React from 'react';

let Handle_five= function(props) {
  let size = '150px';
  let pic = props.pic;
  
  let styles1 = {position: 'absolute', top:'0px', left:'2px'}
  let styles2 = {position: 'absolute',top:'152px', left:'0px'}
  let styles3 = {position: 'absolute',top:'0px', left:'152px'}
  let styles4 = {position: 'absolute',top: '0px', left:'452px'}
  let styles5 = {position: 'absolute',top: '152px',left:'450px'}

  return (
    <div className = 'photogallery'>
      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles1}>
          <img className = 'pic' src = {pic[0].src} height = {size} width = {size}/>
          <p className = 'text'> {pic[0].txt_description}</p>
        </div>  
      </div>         

      <div className = 'photo'>
        <div className = 'pic-wrapper'  style = {styles2}>
          <img className = 'pic' src = {pic[1].src} height = {size} width = {size}/>
          <p className = 'text'> {pic[1].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles3}>
          <img className = 'pic' src = {pic[2].src} height = '300px' width = '300px'/>
          <p className = 'text'> {pic[2].txt_description}</p>
        </div>
      </div>
  
      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles4}>
          <img className = 'pic' src = {pic[3].src} height = {size} width = {size}/>
          <p className = 'text'> {pic[3].txt_description}</p>
        </div>
      </div>

      <div className = 'photo'>
        <div className = 'pic-wrapper' style = {styles5}>
          <img className = 'pic' src = {pic[4].src} height = {size} width = {size}/>
          <p className = 'text'> {pic[4].txt_description}</p>
        </div>
      </div>

    </div>
  )
};

export default Handle_five;
