import React from 'react';
import styles from 'styles/containers/demoContainer.module.scss';

export const DemoContainer = ({ postData }) => {
  if (postData) {
    return (
      <>
        <div className={styles.leftArrow} />
        <div className={styles.rightArrow} />
        <div className={styles.container}>
          <img className={styles.thumbnail} src={postData.thumbnail} alt="thumbnail" />
          <div className={styles.infobox}>
            <div className={styles.textbox}>
              <span className={styles.title}> MEME </span>
              <span className={styles.tag}> React, Django, 2021.02 </span>
              <span className={styles.members}> xxx,xxx,xxx,xxx,xxx,xxx </span>
              <span className={styles.projectInfo}>
                감정 표현의 인스턴트화 시대. 이모티콘 같이 간단한 감정 대리인의 의존도가 커지면서
                감정 표현에 서툴고, 부정적인 감정관리에 어려움을 겪는 디지털 네이티브 세대를 위한
                감정관리 방법을 제공하는 어플리케이션입니다.
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

DemoContainer.propTypes = {
  postData: Object,
};

export default DemoContainer;
