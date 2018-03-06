import React from 'react';

class Carosel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className = 'outtermost' >  
        <div className = 'slidebinder' >
          <div className = 'sliderbox'>
            <div className = 'left' onClick = {this.props.left} >
              <img src = 'http://www.thorlux.co.uk/shared/media/arrow-left-white.png'
                width = '30px' height = '35px'/>
            </div>
            <div className = 'slide'>
              {this.props.originState.dupePhotos.map(pic => 
                  <img key src = {pic.src} height = '600px' width = '600px'/>
              )}
            </div>
            <div className = 'right' onClick = {this.props.right} >
               <img src ='http://www.thorlux.com/shared/media/arrow-right-white.png'
                width = '30px' height = '35px' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Carosel;
