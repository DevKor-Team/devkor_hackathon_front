import React, { useEffect, useRef } from 'react';
import styles from 'styles/containers/banner1.module.scss';

export const Banner1 = () => {
  const TextBox = useRef();
  const blinker = useRef();

  useEffect(() => {
    const Target = TextBox.current;

    // 혹시라도 채워져있으면 초기화
    if (Target.innerHTML) {
      Target.innerHTML = '';
    }
    const Text = 'DEV$KOR$\nSOLVES\nREAL-WORLD ISSUES;';
    const textList = [...new Array(Text.length)].map((_, idx) => Text[idx]);

    let idx = 0;
    let inputMode = 'normal'; // 색상처리
    let spanBox = null; // 색상 입힌 텍스트 넣을 곳

    const IntervalID = setInterval(() => {
      try {
        // error handling
        const currentWord = textList[idx];
        // 모든 글자 다 입력되었으면 인터벌 종료
        if (idx === Text.length) {
          blinker.current.className = styles.text_line__active;
          clearInterval(IntervalID);
        }

        // 줄바꿈 처리
        if (currentWord === '\n') {
          Target.innerHTML += '<br/>';
        }

        // undefined 처리
        if (currentWord !== undefined && currentWord !== '$') {
          if (inputMode === 'normal') {
            Target.innerHTML += currentWord;
          }
          if (inputMode === 'bold') {
            spanBox.innerHTML += currentWord;
          }
        }

        // 색상처리
        if (currentWord === '$') {
          // 입력 모드 변경
          inputMode = inputMode === 'normal' ? 'bold' : 'normal';
          if (inputMode === 'bold') {
            spanBox = document.createElement('span');
            spanBox.classList.add(styles.crimson);
            Target.appendChild(spanBox);
          }
        }
        idx += 1;
      } catch {
        clearInterval(IntervalID);
      }
    }, 70);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>
          {' '}
          We are DEVELOPMENT CREW <br /> based in <span className={styles.crimson}> KOR </span>EA
          UNIVERSITY{' '}
        </h2>
        <h1 ref={TextBox}> </h1>
        <span ref={blinker} className={styles.text_line}>
          ㅣ
        </span>
      </div>
    </div>
  );
};

export default Banner1;
