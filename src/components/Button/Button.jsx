import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ButtonLoad = ({ onClick }) => {
  return (
    <div className="btnDiv">
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={onClick}
      >
        Load more
      </Button>
    </div>
  );
};

ButtonLoad.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoad;
