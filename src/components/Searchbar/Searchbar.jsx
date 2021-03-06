import React from 'react';

class Searchbar extends React.Component {
  state = {
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
    cameras: [
      'MAST',
      'FHAZ',
      'RHAZ',
      'CHEMCAM',
      'MAHLI',
      'MARDI',
      'NAVCAM',
      'PANCAM',
      'MINITES',
    ],
    sol: 1000,
    rover: 'Curiosity',
    camera: 'MAST',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { rover, camera, sol } = this.state;
    this.props.onSubmit({ rover, camera, sol });

    this.setState({ search: '' });
  };

  render() {
    const { rovers, cameras, sol } = this.state;

    return (
      <header className="Searchbar">
        <img
          className="nasa_logo"
          alt="nasa_logo"
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        ></img>
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <div className="SearchForm_block">
            <h3 className="SearchForm_title">Mars Rover</h3>
            <select
              className="SearchForm-input"
              onChange={e => this.setState({ rover: e.target.value })}
            >
              {rovers.map(rover => (
                <option key={rover} value={rover}>
                  {rover}
                </option>
              ))}
            </select>
          </div>

          <div className="SearchForm_block">
            <h3 className="SearchForm_title">Camera</h3>
            <select
              className="SearchForm-input"
              onChange={e => this.setState({ camera: e.target.value })}
            >
              {cameras.map(camera => (
                <option key={camera} value={camera}>
                  {camera}
                </option>
              ))}
            </select>
          </div>

          <div className="SearchForm_block">
            <h3 className="SearchForm_title"> Sol</h3>
            <input
              className="SearchForm-input"
              name="sol"
              type="text"
              placeholder="1000"
              value={sol}
              onChange={e => this.setState({ sol: e.target.value })}
            />
          </div>
          <div className="SearchForm_block">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
          </div>
        </form>
      </header>
    );
  }
}

export default Searchbar;
