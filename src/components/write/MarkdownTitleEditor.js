import React from 'react';
// import PropTypes from 'prop-types';
// import styles from 'styles/containers/write.module.scss';
import useTitle from 'components/hooks/write/useTitle';

const MarkdownTitleEditor = () => {
  const [title, setTitle] = useTitle();

  return (
    <div>
      <input
        value={title}
        placeholder="제목을 입력하세요"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {/* title bottom border */}
    </div>
  );
};

export default MarkdownTitleEditor;
