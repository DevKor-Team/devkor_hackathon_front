import styles from 'styles/index.module.scss';
import Project from 'containers/Project/ProjectContainer';

export default function My() {
  return (
    <div className={styles.wrapper}>
      <Project />
    </div>
  );
}
