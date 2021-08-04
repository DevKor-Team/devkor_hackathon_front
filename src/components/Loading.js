import Loader from 'react-loader-spinner';
import styles from 'styles/components/loadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      <h1> Loading ... </h1>
    </div>
  );
};

export default LoadingSpinner;
