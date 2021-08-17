import Loader from 'react-loader-spinner';
import styles from 'styles/components/loadingSpinner.module.scss';
import PropTypes from 'prop-types';

export const LoadingSpinner = (props) => {
  const { text } = props;
  return (
    <div className={styles.wrapper}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      <h2> {text} </h2>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
};

export default LoadingSpinner;
