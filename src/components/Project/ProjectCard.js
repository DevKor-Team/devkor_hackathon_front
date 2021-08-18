import styles from 'styles/components/project/projectCard.module.scss';

const thumbnail = '/images/default.jpg';

// tech stacks
const aws = '/images/components/ProjectItem/AWS.svg';
const css = '/images/components/ProjectItem/CSS.svg';
const django = '/images/components/ProjectItem/Django.svg';
const html = '/images/components/ProjectItem/HTML.svg';
const js = '/images/components/ProjectItem/JS.svg';
const mysql = '/images/components/ProjectItem/mysql.svg';
const postgresql = '/images/components/ProjectItem/postgresql.svg';
const react = '/images/components/ProjectItem/React.svg';
const redux = '/images/components/ProjectItem/Redux.svg';

export const ProjectCard = () => {
  return (
    <>
      <article className={styles.card}>
        <img src={thumbnail} alt="thumbnail" />
        <section className={styles.textbox}>
          <h3> assdnaipsmdoopx </h3>
          <p> abcdefg </p>
          <div className={styles.subinfo}>
            <span> 4일 전 </span>
            <span className={styles.separator}> . </span>
            <span> n개의 댓글 </span>
          </div>
        </section>
        <div className={styles.footer}>
          <div className={styles.footer__infobox}>
            <span>
              {' '}
              by <b> 김점동 </b>{' '}
            </span>
            <span> + 26 </span>
          </div>
          <div className={styles.stackbox}>
            <img src={aws} alt="aws" className={styles.item} />
            <img src={css} alt="aws" className={styles.item} />
            <img src={html} alt="aws" className={styles.item} />
            <img src={django} alt="aws" className={styles.item} />
            <img src={js} alt="aws" className={styles.item} />
            <img src={react} alt="aws" className={styles.item} />
            <img src={postgresql} alt="aws" className={styles.item} />
            <img src={mysql} alt="aws" className={styles.item} />
            <img src={redux} alt="aws" className={styles.item} />
            <img src={js} alt="aws" className={styles.item} />
            <img src={redux} alt="aws" className={styles.item} />
            <img src={js} alt="aws" className={styles.item} />
            <img src={redux} alt="aws" className={styles.item} />
            <img src={js} alt="aws" className={styles.item} />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
