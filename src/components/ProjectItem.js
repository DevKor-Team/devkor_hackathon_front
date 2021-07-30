import styles from 'styles/components/projectitem.module.scss';

const projectitemimg = '/images/components/ProjectItem/testImage.jpg';
const logo = 'images/containers/Navbar/devkor_logo.svg';

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

export const ProjectItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagewrapper}>
        <img src={projectitemimg} alt="devkor" />
      </div>
      <div className={styles.tail_wrapper}>
        <ul className={styles.tail}>
          <li className={styles.item}>
            <img src={html} alt="html" />
          </li>
          <li className={styles.item}>
            <img src={js} alt="javascript" />
          </li>
          <li className={styles.item}>
            <img src={css} alt="css" />
          </li>
          <li className={styles.item}>
            <img src={redux} alt="redux" />
          </li>
          <li className={styles.item}>
            <img src={react} alt="react" />
          </li>
          <li className={styles.item}>
            <img src={django} alt="css" />
          </li>
          <li className={styles.item}>
            <img src={mysql} alt="mysql" />
          </li>
          <li className={styles.item}>
            <img src={postgresql} alt="postgresql" />
          </li>
          <li className={styles.item}>
            <img src={aws} alt="aws" />
          </li>
        </ul>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
    </div>
  );
};
export default ProjectItem;
