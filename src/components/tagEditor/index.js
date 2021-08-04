/* eslint-disable react/prop-types */
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styles from 'styles/components/tageditor.module.scss';

const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

const TagItem = ({ tag, isLastIndex, backspacePressedCount, handleOnRemoveTag, tagClassName }) => {
  return (
    <div
      className={`${styles.tagBox} ${tagClassName} ${
        backspacePressedCount === 1 && isLastIndex && styles.warningBox
      }`}
      key={`${getId()}`}
    >
      <span>{tag}</span>
      <button className={styles.closeMark} onClick={() => handleOnRemoveTag(tag)} type="button">
        ×
      </button>
    </div>
  );
};

const tagsListReducer = (state, action) => {
  const { type, value } = action;
  const newState = [...state];
  if (type === 'ADD_TAG' && value) {
    newState.push(value);
  } else if (type === 'REMOVE_TAG') {
    newState.splice(value, 1);
  }
  return newState;
};

const TagsInput = ({ tags, placeholder, onChange, tagClassName }) => {
  const [tagsList, setTagsList] = useReducer(tagsListReducer, tags);
  const [tagInputValue, setTagInputValue] = useState('');
  const [backspacePressedCount, setBackspacePressedCount] = useState(0);
  const inputRef = useRef(null);

  const focusInputElement = () => {
    if (inputRef) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (onChange instanceof Function) {
      onChange(tagsList);
    }
  }, [tagsList]);

  const handleOnKeyDown = (event) => {
    const { key } = event;
    if ((key === 'Enter' || key === ' ') && tagsList.indexOf(tagInputValue) === -1) {
      setTagsList({ type: 'ADD_TAG', value: tagInputValue.trim() });
      setTagInputValue('');
      setBackspacePressedCount(0);
    } else if (key === 'Backspace') {
      if (backspacePressedCount === 1 && !tagInputValue) {
        setTagsList({ type: 'REMOVE_TAG', value: tagsList.length - 1 });
        setTagInputValue('');
        setBackspacePressedCount(0);
      } else if (!tagInputValue && backspacePressedCount !== 1) {
        setBackspacePressedCount(backspacePressedCount + 1);
      }
    }
  };

  const handleOnRemoveTag = (tag) => {
    const tagIndex = tagsList.findIndex((data) => data === tag);
    setTagsList({ type: 'REMOVE_TAG', value: tagIndex });
  };

  return (
    <div
      className={styles.tagsEditorContainer}
      onClick={focusInputElement}
      tagIndex="0"
      role="group"
    >
      <div className={styles.tagsSection}>
        {tagsList.map((tag, index) => {
          const isLastIndex = index === tagsList.length - 1;
          return (
            <TagItem
              tag={tag}
              isLastIndex={isLastIndex}
              backspacePressedCount={backspacePressedCount}
              handleOnRemoveTag={handleOnRemoveTag}
              tagClassName={tagClassName}
            />
          );
        })}
        <input
          type="text"
          className={styles.tagInputBox}
          onKeyDown={handleOnKeyDown}
          onChange={(e) => setTagInputValue(e.target.value)}
          name="tagInput"
          value={tagInputValue}
          placeholder={placeholder}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default TagsInput;
