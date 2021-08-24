import React from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import getImg from './services/imgAPI';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Message from './components/Message';
import scrollTo from './services/scrollTo';
import './styles.scss';

class App extends React.Component {
  state = {
    searchQuery: {},
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: { src: '' },
  };

  componentDidMount() {
    // this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  formSubmitQuery = query => {
    this.setState({ searchQuery: query, images: [], page: 1, error: null });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { ...searchQuery, page };
    console.log(options);
    this.setState({ isLoading: true });

    getImg(options)
      .then(photos => {
        this.setState(prevState => ({
          images: [...prevState.images, ...photos],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onImgClick = e => {
    const src = e.target.dataset.img;

    if (e.target.nodeName === 'IMG') {
      this.setState({ largeImg: { src } });
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, error } = this.state;
    const { src } = this.state.largeImg;
    const renderBtn = images.length > 0 && !isLoading;
    const nothing = images.length === 0;
    console.log(images);

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitQuery} />

        <ImageGallery images={images} onClick={this.onImgClick} />

        {isLoading && <Loader isLoading={isLoading} />}

        {renderBtn && <Button onClick={this.fetchImages} scroll={scrollTo()} />}

        {showModal && <Modal src={src} onClose={this.toggleModal} />}

        {error && <h1>{error}</h1>}

        {nothing && <Message />}
      </div>
    );
  }
}

export default App;
