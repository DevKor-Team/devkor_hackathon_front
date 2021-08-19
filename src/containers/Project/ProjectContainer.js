import styles from 'styles/containers/projectContainer.module.scss';
import ProjectItem from 'components/Project/ProjectCard';

export const ProjectContainer = () => {
  return (
    <div className={styles.wrapper}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectContainer;
