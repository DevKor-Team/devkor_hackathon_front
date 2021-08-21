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
      {texts.save ? (
        promise ? (
          <PromiseButtonItem
            text={texts.save}
            className={styles.submitContainerSave}
            onClick={onClicks.save}
          />
        ) : (
          <button className={styles.submitContainerSave} type="button" onClick={onClicks.save}>
            {texts.save}
          </button>
        )
      ) : (
        <></>
      )}
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
