import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

class ImageGalleryItem extends React.Component {
  static defaultProps = {
    img: defaultImage,
  };

  static propTypes = {
    img: PropTypes.string.isRequired,
  };

  render() {
    const { img } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={img}
          alt="Mars_Rover_Photo"
          data-img={img}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
