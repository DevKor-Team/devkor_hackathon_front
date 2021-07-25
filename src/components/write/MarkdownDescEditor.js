import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
import useDescription from 'components/hooks/write/useDescription';
import 'codemirror/lib/codemirror.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import styles from 'styles/containers/write.module.scss';

const MarkdownDescEditor = () => {
  const [description, setDescription] = useDescription();

  // const textArea = useRef(null);

  const onChange = useCallback(
    (editor, data, value) => {
      setDescription(value);
    },
    [setDescription]
  );
  const onDrop = (editor, event) => {
    // console.log(event);
    const coords = editor.coordsChar({
      left: event.x,
      top: event.y,
    });
    editor.setCursor(coords);
    const { line, ch } = coords;
    console.log(line, ch);
  };

  return (
    <div className={styles.codeMirror}>
      <CodeMirror
        value={description}
        options={{
          mode: 'markdown',
          theme: 'one-light',
          dragDrop: true,
          allowDropFileTypes: ['jpg', 'png', 'jpeg'],
          placeholder: '당신은 어떤 사람인가요? 당신에 대해서 알려주세요.',
          lineWrapping: true,
        }}
        onBeforeChange={onChange}
        onDrop={onDrop}
        defaultValue="프로젝트를 구체적으로 기술해주세요\r\n# 안녕하세요"
      />
      {/* <textarea
        ref={textArea}
        value={description}
        placeholder="프로젝트를 구체적으로 기술해주세요# 안녕하세요"
      /> */}
    </div>
  );
};

export default MarkdownDescEditor;
