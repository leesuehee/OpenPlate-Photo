import React from 'react';

let Carousel = function(props){
  return (
    <div className = 'outtermost' >  
      <div className = 'slidebinder' >
        <div className = 'sliderbox'>

          <div className = 'left' onClick = {props.left} >
            <img src = 'http://www.thorlux.co.uk/shared/media/arrow-left-white.png'
              width = '30px' height = '35px'/>
          </div>

          <div className = 'slide'>
            {props.photos.map(pic => 
              <div className = 'unit'>
                <img className= 'carosel-img' 
                  key src = {pic.src} height = '400px' width = '400px'
                  onClick = {props.carousel}/>
                <p className='carosel-dis'>{pic.txt_description}</p>
              </div>
            )}
          </div>

          <div className = 'right' onClick = {props.right} >
              <img src ='http://www.thorlux.com/shared/media/arrow-right-white.png'
              width = '30px' height = '35px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
