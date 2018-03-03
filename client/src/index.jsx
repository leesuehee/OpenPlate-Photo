import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Carosel from './components/Carosel.jsx';
import css from './style.css';
import $ from 'jquery';

let dupe = require('../../seeds/test/dataDupe.js');

class PhotoModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carosel: false,
      dupePhotos: dupe,
      total: dupe.length,
      current: 0,
    }
  }
  handleClick() {
      this.setState({
        carosel: !this.state.carosel
      });
  }
  onRightClick() {
    if (this.state.current < this.state.total) {
      let inc = this.state.current++;
      $(".sliderbox").animate({left:"-=600"},400);
      $(".right").animate({left:"+=600"},400);
      $(".left").animate({left:"+=600"},400);
      // this.state.current++;
      this.setState({
        current:inc
      })
    }
  }

  onLeftClick() {
    if (this.state.current > 1) {
      let dec = this.state.current--;
      $(".sliderbox").animate({left:"+=600"},400);
      $(".right").animate({left:"-=600"},400);
      $(".left").animate({left:"-=600"},400);
      // this.state.current--
      this.setState({
        current:dec
      })
    }
  }
  
  render() { 
    return (
      <div>
        <div className = 'photomod' onClick = {this.handleClick.bind(this)}>
          <span className = 'photoheader'>{this.state.dupePhotos.length} Photos</span>
          <span className = 'viewmore'>View more</span>
          <hr/>
          <Container photos = {this.state.dupePhotos}/>
        </div>

        <div className = 'toggle-carosel'>
        {(this.state.carosel)? <Carosel photos = {this.state.dupePhotos} click = {this.handleClick.bind(this)} 
          left = {this.onLeftClick.bind(this)} right = {this.onRightClick.bind(this)}
          originState = {this.state}
          /> : <div></div>}
        </div>
      </div>
    )
  }
}
export default ReactDOM.render(<PhotoModule/>, document.getElementById('app'))