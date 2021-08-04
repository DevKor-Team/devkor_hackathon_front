import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/write.module.scss';

const MarkdownSubmit = ({ texts, onClicks }) => {
  return (
    <div className={styles.submitContainer}>
      <button className={styles.submitContainerExit} type="button" onClick={onClicks.no}>
        {texts.no}
      </button>
      <button className={styles.submitContainerSubmit} type="button" onClick={onClicks.yes}>
        {texts.yes}
      </button>
    </div>
  );
};

MarkdownSubmit.propTypes = {
  texts: PropTypes.objectOf({
    no: PropTypes.string,
    yes: PropTypes.string,
  }),
  onClicks: PropTypes.objectOf({
    no: PropTypes.func,
    yes: PropTypes.func,
  }),
};

export default MarkdownSubmit;
