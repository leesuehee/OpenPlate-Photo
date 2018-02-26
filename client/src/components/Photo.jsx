import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className = "photogallery"> 
        im Photo
        {this.props.photos.map(pic => 

          <div className = "photo" key src = {pic.src}>
            {console.log('IM IN THE MAP BIIISH')}
            description: {pic.text_description}
            size: {pic.size.small}
          </div>
        )}
      </div>
    );
  }
}

module.exports = Photo;
