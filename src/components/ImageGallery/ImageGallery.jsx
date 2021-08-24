import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { images, onClick } = this.props;

    return (
      <ul onClick={onClick} className="ImageGallery">
        {images.map(({ id, img_src }) => (
          <ImageGalleryItem key={id} img={img_src} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
