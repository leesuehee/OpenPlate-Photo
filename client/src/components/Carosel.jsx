import React from 'react';
import $ from 'jquery';

let dupe = require('../../../seeds/test/dataDupe.js');

class Carosel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: dupe,
      total: dupe.length,
      current: 0,
    }
  }
  onRightClick(e) {
    console.log('e',e.target.value);
    console.log('right clicked')
    if (this.state.current < this.state.total) {
      let inc = this.state.current++;
      $(".sliderbox").animate({left:"-=500"},500);
      $(".right").animate({left:"+=500"},500);
      $(".left").animate({left:"+=500"},500);
      this.state.current++;
    }
  }

  onLeftClick(e) {
    console.log('left clicked')
    console.log(e.target.value)
    if (this.state.current > 1) {
      let dec = this.state.current--;
      $(".sliderbox").animate({left:"+=500"},500);
      $(".right").animate({left:"-=500"},500);
      $(".left").animate({left:"-=500"},500);
      this.state.current--
    }
  }

  render() {
    return (
      <div className = 'outtermost' >     
        <div className = 'slidebinder' >
          <div className = 'sliderbox'>
            <div className = 'left' onClick = {this.onLeftClick.bind(this)}>
              <img src = 'http://www.thorlux.co.uk/shared/media/arrow-left-white.png'
                width = '30px' height = '35px'/>
            </div>
            <div className = 'slide'>
              {this.state.display.map(pic => 
                <img key src ={this.state.display[this.state.current].src} 
                  height = '500px' width = '500px'
                />
              )}
            </div>
            <div className = 'right' onClick = {this.onRightClick.bind(this)}>
               <img src ='http://www.thorlux.com/shared/media/arrow-right-white.png'
                width = '30px' height = '35px'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Carosel;




