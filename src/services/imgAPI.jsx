import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const API_KEY = 'DEMO_KEY';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  sol: 1000,
  page: 1,
  api_key: API_KEY,
};

const getImg = async ({
  rover = 'curiosity',
  camera = 'MAST',
  sol = 1000,
  page,
}) => {
  try {
    const { data } = await axios.get(`${rover}/photos/`, {
      params: { sol, page, camera },
    });
    return data.photos;
  } catch (error) {
    alert(error);
    return [];
  }
};

getImg.propTypes = {
  // curiosity: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  sol: PropTypes.number.isRequired,
};

export default getImg;
