import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
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
//   handleClick() {
//     console.log ('clicked')
//     this.setState({
//       carosel: !this.state.carosel
//     });
//     // if carosel is false regular photo gallery is displayed
//     // else carosel view will render.. will work on photo gallery clone first
//   }

  render() {

    return (
      <div className = 'photomod'>
        <span className = 'photoheader'> 
           Photos 
        </span>
        <span className = 'viewmore'>
            View more
        </span>
        {console.log('made it past photomod')}
        <Container photos = {this.state.dupePhotos}/>
        </div>
    )
  }
}
ReactDOM.render(<PhotoModule/>, document.getElementById('app'))
