import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/write.module.scss';

const MarkdownEditorPanel = ({ handleToolbarClick }) => {
  return (
    <div className={styles.panelContainer}>
      {[1, 2, 3, 4].map((headingNumber) => (
        <button
          className={styles.panelButton}
          type="button"
          onClick={() => {
            handleToolbarClick(`heading${headingNumber}`);
          }}
          key={headingNumber}
        >
          <div className={styles.panelButtonText}>
            H<span>{headingNumber}</span>
          </div>
        </button>
      ))}
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('bold');
        }}
      >
        <img src="images/components/write/icon-bold.svg" alt="add bold on description" />
      </button>
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('italic');
        }}
      >
        <img src="images/components/write/icon-italic.svg" alt="add italic on description" />
      </button>
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('strike');
        }}
      >
        <img
          src="images/components/write/icon-strikethrough.svg"
          alt="add strikethrough on description"
        />
      </button>
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('blockquote');
        }}
      >
        <img src="images/components/write/icon-quotation.svg" alt="add quotations on description" />
      </button>
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('image');
        }}
      >
        <img src="images/components/write/icon-image.svg" alt="add images on description" />
      </button>
      <button
        className={styles.panelButton}
        type="button"
        onClick={() => {
          handleToolbarClick('codeblock');
        }}
      >
        <div className={styles.panelButtonText}>{'<>'}</div>
      </button>
    </div>
  );
};

MarkdownEditorPanel.propTypes = {
  handleToolbarClick: PropTypes.func,
};

export default MarkdownEditorPanel;
