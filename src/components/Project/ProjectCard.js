import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from 'styles/components/project/projectCard.module.scss';

// tech stacks
const techStacks = {
  aws: '/images/components/ProjectItem/AWS.svg',
  css: '/images/components/ProjectItem/CSS.svg',
  django: '/images/components/ProjectItem/Django.svg',
  html: '/images/components/ProjectItem/HTML.svg',
  js: '/images/components/ProjectItem/JS.svg',
  nodejs: '/images/components/ProjectItem/nodejs.svg',
  mysql: '/images/components/ProjectItem/mysql.svg',
  postgresql: '/images/components/ProjectItem/postgresql.svg',
  react: '/images/components/ProjectItem/React.svg',
  redux: '/images/components/ProjectItem/Redux.svg',
};

export const ProjectCard = ({ demo }) => {
  const router = useRouter();
  return (
    <>
      <article
        className={styles.card}
        onClick={() => {
          router.push(`/demo/${demo.id}`);
        }}
        tabIndex={-1}
      >
        <img src={demo.thumbnail} alt="thumbnail" />
        <section className={styles.textbox}>
          <h3>{demo.title}</h3>
          <p>{demo.subtitle}</p>
          <div className={styles.subinfo}>
            <span>{demo.createdAt}</span>
            <span className={styles.separator}> . </span>
            <span> {demo.comments}개의 댓글 </span>
          </div>
        </section>
        <div className={styles.footer}>
          <div className={styles.footer__infobox}>
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/team/${demo.team.id}`);
              }}
            >
              {' by '}
              <b>{demo.team.name}</b>{' '}
            </span>
            <span> + {demo.like || 0} </span>
          </div>
          <div className={styles.stackbox}>
            {demo.techStacks
              .filter((stack) => Object.prototype.hasOwnProperty.call(techStacks, stack))
              .map((stack) => (
                <img src={techStacks[stack]} alt={stack} className={styles.item} key={stack} />
              ))}
          </div>
        </div>
      </article>
    </>
  );
};

ProjectCard.propTypes = {
  demo: PropTypes.object,
};

export default ProjectCard;
