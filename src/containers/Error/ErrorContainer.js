import styles from 'styles/containers/errorContainer.module.scss';

const Error404 = '/images/containers/ErrorContainer/error404.jpg';
const Error500 = '/images/containers/ErrorContainer/error500.jpg';

export const ErrorContainer = (props) => {
  const { errorCode } = props;
  if (errorCode >= 400 && errorCode < 500) {
    return (
      <div className={styles.container}>
        <img src={Error404} alt="Error_404_image" />
        <section>
          <h2> 죄송합니다. 불러오는 도중 에러가 발생하였습니다. </h2>
          <h3> 존재하지 않는 게시글입니다. </h3>
        </section>
      </div>
    );
  }
  if (errorCode >= 500) {
    return (
      <div className={styles.container}>
        <img src={Error500} alt="Error_500_image" />
        <section>
          <h2> 죄송합니다. 불러오는 도중 에러가 발생하였습니다. </h2>
          <h3> 서버상의 에러입니다. 새로고침을 시도해 주시거나, 네트워크 상태를 확인해주세요. </h3>
        </section>
      </div>
    );
  }
  return null;
};

ErrorContainer.propTypes = {
  errorCode: Number,
};

export default ErrorContainer;
