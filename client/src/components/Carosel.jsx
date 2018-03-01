import React from 'react';
import $ from 'jquery';

let dupe = require('../../../seeds/test/dataDupe.js');

class Carosel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: dupe,
      total: dupe.length,
      current: 0
    }
  }

  arrows(current) {
    $(".right").show();
    $(".left").show();
  }
  onRightClick() {
    console.log('clicked R')
    if (this.state.current < this.state.total) {
      $(".sliderbox").animate({left:"-=500"},500);
      $(".right").animate({left:"+=500"},500);
      $(".left").animate({left:"+=500"},500);
      this.arrows(this.state.current)
    }
  }
  onLeftClick() {
    console.log('clicked L')

      $(".sliderbox").animate({left:"+=500"},500);
      $(".right").animate({left:"-=500"},500);
      $(".left").animate({left:"-=500"},500);
      this.arrows(this.state.current)
    
  }
  render() {

    return (
      <div>     
        <div className = 'blackout'>
        </div>
        <div className = 'slidebinder'>
          <div className = 'sliderbox'>

            <div className = 'left' onClick = {this.onLeftClick.bind(this)}>
              <img src = 'https://retrofitaccelerator.cityofnewyork.us/sites/default/files/public/arrow_up.png'
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
               <img src ='https://retrofitaccelerator.cityofnewyork.us/sites/default/files/public/arrow_up.png'
                width = '30px' height = '35px'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

module.exports = Carosel;




