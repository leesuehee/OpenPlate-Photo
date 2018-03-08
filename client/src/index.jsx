import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Carosel from './components/Carosel.jsx';
import css from './style.css';
import $ from 'jquery';

const axios = require('axios')

class PhotoModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carosel: false,
      dupePhotos: [],
      total: 0,
      current: 0,
    }
  }

  componentDidMount () {
    let thiz = this;

    console.log(this.props.photos);
    axios.get(`/photos/${this.props.photos}`)
      .then(function(response) {
        thiz.setState({
          dupePhotos: response.data[0].gallery,
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
      $(".sliderbox").animate({left:"-=600"},200);
      $(".right").animate({left:"+=600"},200);
      $(".left").animate({left:"+=600"},200);
    }
  }
  onLeftClick() {
    if(this.state.current > 0) {
      this.state.current--;
      $(".sliderbox").animate({left:"+=600"},200);
      $(".right").animate({left:"-=600"},200);
      $(".left").animate({left:"-=600"},200);
    }
  }
  render() { 
    return (
      <div>
        {(this.state.carosel)? 
          <div>
            <div className = 'photomod' onClick = {this.handleClick.bind(this)}>
              <div className = 'relative'>
                <span className = 'photoheader'>{this.state.total} Photos</span>
                <span className = 'viewmore' onClick = {this.handleClick.bind(this)}>View more</span>
                <Container photos = {this.state.dupePhotos}/>
              </div>
            </div>
            <div className = 'toggle-carosel'>
              <Carosel photos = {this.state.dupePhotos}  
              left = {this.onLeftClick.bind(this)} right = {this.onRightClick.bind(this)}
              originState = {this.state}/> 

            </div>
          </div>
        :
          <div className = 'photomod'>
            <div className = 'relative'>
              <span className = 'photoheader'>{this.state.total} Photos</span>
              <span className = 'viewmore' onClick = {this.handleClick.bind(this)}>View more</span>
              <Container photos = {this.state.dupePhotos} carosel = {this.handleClick.bind(this)}/>
            </div>
          </div>}
      </div>
    )
  }
}
export default ReactDOM.render(<PhotoModule photos={1}/>, document.getElementById('app'))

