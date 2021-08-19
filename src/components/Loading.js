import Loader from 'react-loader-spinner';
import styles from 'styles/components/loadingSpinner.module.scss';
import PropTypes from 'prop-types';

export const LoadingSpinner = (props) => {
  const { text, width, height } = props;
  const customWidth = width || 100;
  const customHeight = height || 100;

  return (
    <div className={styles.wrapper}>
      <Loader type="Puff" color="#00BFFF" height={customHeight} width={customWidth} />
      <h2> {text} </h2>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LoadingSpinner;
