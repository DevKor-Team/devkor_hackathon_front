import React, { useCallback, useRef } from 'react';
// import PropTypes from 'prop-types';
import MarkdownEditorPanel from 'components/write/MarkdownEditorPanel';
import useDescription from 'components/hooks/write/useDescription';
import 'codemirror/lib/codemirror.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import styles from 'styles/containers/write.module.scss';

const MarkdownDescEditor = () => {
  const [description, setDescription] = useDescription();

  const codeMirrorRef = useRef(null);

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
    alert('준비중인 기능입니다.');
  };

  const handleToolbarClick = (mode) => {
    const codemirror = codeMirrorRef.current.editor;

    if (!codemirror) return;
    const doc = codemirror.getDoc();

    const cursor = doc.getCursor();
    const selection = {
      start: doc.getCursor('start'),
      end: doc.getCursor('end'),
    };

    const line = doc.getLine(cursor.line);

    const selectWholeLine = () => {
      doc.setSelection(
        {
          line: cursor.line,
          ch: 0,
        },
        {
          line: cursor.line,
          ch: line.length,
        }
      );
    };

    const removeHeading = (text) => {
      return text.replace(/#{1,6} /, '');
    };

    const handlers = {
      ...[1, 2, 3, 4] // creates handlers for heading1, heading2, heading3, heading4
        .map((number) => () => {
          // create handler function
          const characters = '#'.repeat(number);
          const plain = removeHeading(line);
          selectWholeLine();
          doc.replaceSelection(`${characters} ${plain}`);
        })
        .reduce((headingHandlers, handler, index) => {
          // reduce into handlers object
          return Object.assign(headingHandlers, {
            [`heading${index + 1}`]: handler,
          });
        }, {}),
      bold: () => {
        const selected = doc.getSelection();
        if (selected === '텍스트') {
          const isBold = /\*\*(.*)\*\*/.test(
            doc.getRange(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch + 2 }
            )
          );

          if (isBold) {
            doc.setSelection(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch + 2 }
            );
            doc.replaceSelection('텍스트');
            doc.setSelection(
              { line: selection.start.line, ch: selection.start.ch - 2 },
              { line: selection.end.line, ch: selection.end.ch - 2 }
            );
            return;
          }
        }
        if (/\*\*(.*)\*\*/.test(selected)) {
          // matches **string**
          doc.replaceSelection(selected.replace(/\*\*/g, ''));
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 4 }
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`**${selected}**`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 4 }
          );
          return;
        }
        doc.replaceSelection('**텍스트**');
        doc.setSelection(
          {
            line: cursor.line,
            ch: cursor.ch + 2,
          },
          {
            line: cursor.line,
            ch: cursor.ch + 5,
          }
        );
      },
      italic: () => {
        let selected = doc.getSelection();

        if (selected.length === 0) {
          doc.replaceSelection(`_텍스트_`);
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 1,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 4,
            }
          );
          return;
        }

        if (selected === '텍스트') {
          const selectLeftAndRight = doc.getRange(
            {
              line: selection.start.line,
              ch: selection.start.ch - 1,
            },
            {
              line: selection.end.line,
              ch: selection.end.ch + 1,
            }
          );
          if (/_(.*)_/.test(selectLeftAndRight)) {
            selected = selectLeftAndRight;
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch - 1,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 1,
              }
            );
            selection.start = {
              line: selection.start.line,
              ch: selection.start.ch - 1,
            };
            selection.end = {
              line: selection.end.line,
              ch: selection.end.ch + 1,
            };
          }
        }

        if (/_(.*)_/.test(selected)) {
          const plain = selected
            .replace(/^_/, '') // remove starting _
            .replace(/_$/, ''); // remove ending _
          doc.replaceSelection(plain);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 2 }
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`_${selected}_`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 2 }
          );
        }
      },
      strike: () => {
        let selected = doc.getSelection();

        if (selected.length === 0) {
          doc.replaceSelection(`~~텍스트~~`);
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 2,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 5,
            }
          );
          return;
        }

        if (selected === '텍스트') {
          const selectLeftAndRight = doc.getRange(
            {
              line: selection.start.line,
              ch: selection.start.ch - 2,
            },
            {
              line: selection.end.line,
              ch: selection.end.ch + 2,
            }
          );
          if (/~~(.*)~~/.test(selectLeftAndRight)) {
            selected = selectLeftAndRight;
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              }
            );
            selection.start = {
              line: selection.start.line,
              ch: selection.start.ch - 2,
            };
            selection.end = {
              line: selection.end.line,
              ch: selection.end.ch + 2,
            };
          }
        }

        if (/~~(.*)~~/.test(selected)) {
          const plain = selected
            .replace(/^~~/, '') // remove starting ~~
            .replace(/~~$/, ''); // remove ending ~~
          doc.replaceSelection(plain);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch - 4 }
          );
          return;
        }
        if (selected.length > 0) {
          doc.replaceSelection(`~~${selected}~~`);
          doc.setSelection(
            {
              line: selection.start.line,
              ch: selection.start.ch,
            },
            { line: selection.end.line, ch: selection.end.ch + 4 }
          );
        }
      },
      blockquote: () => {
        const matches = /^> /.test(line);
        doc.setSelection({ line: cursor.line, ch: 0 }, { line: cursor.line, ch: line.length });
        if (matches) {
          doc.replaceSelection(line.replace(/^> /, ''));
          doc.setCursor({
            line: cursor.line,
            ch: cursor.ch - 2,
          });
        } else {
          doc.replaceSelection(`> ${line}`);
          doc.setCursor({
            line: cursor.line,
            ch: cursor.ch + 2,
          });
        }
      },
      image: () => {
        alert('준비중인 기능입니다.');
      },
      codeblock: () => {
        const selected = doc.getSelection();
        if (selected.length === 0) {
          doc.replaceSelection('```\n코드를 입력하세요\n```');
          doc.setSelection(
            {
              line: cursor.line + 1,
              ch: 0,
            },
            {
              line: cursor.line + 1,
              ch: 9,
            }
          );
          return;
        }
        doc.replaceSelection(`\`\`\`\n${selected}\n\`\`\``);
      },
    };

    const handler = handlers[mode];
    if (!handler) return;

    handler();
    codemirror.focus();
  };

  return (
    <>
      <MarkdownEditorPanel handleToolbarClick={handleToolbarClick} />
      <div className={styles.codeMirrorContainer}>
        <CodeMirror
          ref={codeMirrorRef}
          value={description}
          options={{
            mode: 'markdown',
            // theme: 'one-light',
            dragDrop: true,
            allowDropFileTypes: ['jpg', 'png', 'jpeg'],
            placeholder: '당신은 어떤 데모를 만들었나요? 데모에 대해서 알려주세요.',
            lineWrapping: true,
          }}
          onBeforeChange={onChange}
          onDrop={onDrop}
          defaultValue="프로젝트를 구체적으로 기술해주세요\r\n# 안녕하세요"
        />
      </div>
    </>
  );
};

export default MarkdownDescEditor;
