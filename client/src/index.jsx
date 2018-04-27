import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Carosel from './components/Carosel.jsx';
import css from './style.css';
import $ from 'jquery';

const axios = require('axios');

class PhotoModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carosel: false,
      photos: [],
      total: 0,
      current: 0,
    }
  }

  componentDidMount () {
    let context = this;

    axios.get(`/photos/8`)
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
      carosel: !this.state.carosel
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
          <Container photos = {this.state.photos} carosel = {this.handleClick.bind(this)}/>
        </div>
      </div>

    let caroselToggled = 
      <div>
        <div className = 'toggle-carosel'>
          <Carosel photos = {this.state.photos}  
          left = {this.onLeftClick.bind(this)} right = {this.onRightClick.bind(this)}
          /> 

        </div>
      </div>

    return (
      (this.state.carosel)? 
          <div> 
            {photomod}
            {caroselToggled}
          </div>
          :
          <div>
            {photomod}
          </div>
    )
  }
}
// export default ReactDOM.render(<PhotoModule photos={restaurantId:1}/>, document.getElementById('app'))

ReactDOM.render(<PhotoModule/>, document.getElementById('app'));
