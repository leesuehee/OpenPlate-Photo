import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Carosel from './components/Carosel.jsx';
import css from './style.css';


let dupe = require('../../seeds/test/dataDupe.js');

class PhotoModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carosel: false,
      dupePhotos: dupe
    }
  }
  handleClick() {
    console.log ('clicked')
    this.setState({
      carosel: !this.state.carosel
    });
  }
  render() { 
    let display;

    if (this.state.carosel) {
      display = <Carosel photos = {this.state.dupePhotos} click = {this.handleClick.bind(this)}/>
    } else {
      display = <Container photos = {this.state.dupePhotos} click = {this.handleClick.bind(this)}/>
    }

    return (
      <div className = 'photomod'>
        <span className = 'photoheader'>{this.state.dupePhotos.length} Photos</span>
        <span className = 'viewmore'>View more</span>
        <hr/>
        {display}          
      </div>
    )
  }
}
ReactDOM.render(<PhotoModule/>, document.getElementById('app'))