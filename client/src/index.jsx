import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Carousel from './components/Carousel.jsx';
import css from './style.css';
import $ from 'jquery';

const axios = require('axios');

class PhotoModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carousel: false,
      photos: [],
      total: 0,
      current: 0,
    }
  }

  componentDidMount () {
    let context = this;

    axios.get(`/photos/89`)
      .then(function(response) {
        context.setState({
          photos: response.data[0].gallery,
          total: response.data[0].gallery.length
        })
      }).catch(function(error) {
        console.log('axios error', error)
      })
  }

  handleClick() {
    this.setState({
      carousel: !this.state.carousel
    });
  }
  onRightClick() {
    if(this.state.current < this.state.total-1) {
      this.state.current++;
      $(".sliderbox").animate({left:"-=400"},200);
      $(".right").animate({left:"+=400"},200);
      $(".left").animate({left:"+=400"},200);
    }
  }
  onLeftClick() {
    if(this.state.current > 0) {
      this.state.current--;
      $(".sliderbox").animate({left:"+=400"},200);
      $(".right").animate({left:"-=400"},200);
      $(".left").animate({left:"-=400"},200);
    }
  }
  render() { 

    let photomod = 
      <div className = 'photomod'>
        <div className = 'relative'>
          <span className = 'photoheader'>{this.state.total} Photos</span>
          <span className = 'viewmore' onClick = {this.handleClick.bind(this)}>View more</span>
          <Container photos = {this.state.photos} carousel = {this.handleClick.bind(this)}/>
        </div>
      </div>

    let carouselToggled = 
      <div>
        <div className = 'toggle-carousel'>
          <Carousel photos = {this.state.photos}  
          left = {this.onLeftClick.bind(this)} right = {this.onRightClick.bind(this)}
          /> 

        </div>
      </div>

    return (
      (this.state.carousel)? 
          <div> 
            {photomod}
            {carouselToggled}
          </div>
          :
          <div>
            {photomod}
          </div>
    )
  }
}

ReactDOM.render(<PhotoModule/>, document.getElementById('app'));
