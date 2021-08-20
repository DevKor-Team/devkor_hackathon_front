import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/write.module.scss';
import { PromiseButtonItem } from 'components/Button';

const MarkdownSubmit = ({ texts, onClicks, promise }) => {
  return (
    <div className={styles.submitContainer}>
      <button className={styles.submitContainerExit} type="button" onClick={onClicks.no}>
        {texts.no}
      </button>
      {promise ? (
        <PromiseButtonItem
          text={texts.yes}
          className={styles.submitContainerSubmit}
          onClick={onClicks.yes}
        />
      ) : (
        <button className={styles.submitContainerSubmit} type="button" onClick={onClicks.yes}>
          {texts.yes}
        </button>
      )}
    </div>
  );
};

MarkdownSubmit.propTypes = {
  texts: PropTypes.object,
  onClicks: PropTypes.object,
  promise: PropTypes.bool,
};

export default MarkdownSubmit;
