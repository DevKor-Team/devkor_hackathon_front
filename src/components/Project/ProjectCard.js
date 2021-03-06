import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from 'styles/components/project/projectCard.module.scss';

// tech stacks
const techStacks = {
  aws: '/images/components/ProjectItem/AWS.svg',
  css: '/images/components/ProjectItem/CSS.svg',
  css3: '/images/components/ProjectItem/CSS.svg',
  django: '/images/components/ProjectItem/Django.svg',
  html: '/images/components/ProjectItem/HTML.svg',
  html5: '/images/components/ProjectItem/HTML.svg',
  javascript: '/images/components/ProjectItem/JS.svg',
  nodejs: '/images/components/ProjectItem/nodejs.svg',
  mysql: '/images/components/ProjectItem/mysql.svg',
  postgresql: '/images/components/ProjectItem/postgresql.svg',
  react: '/images/components/ProjectItem/React.svg',
  reactjs: '/images/components/ProjectItem/React.svg',
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
          <h3>
            {demo.title} {!demo.show && <span className={styles.notPublished}>(게시 안 됨)</span>}
          </h3>
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
              .filter((stack) => {
                let tmp = stack[0] === '#' ? stack.substring(1) : stack;
                tmp = tmp.toLowerCase();
                return Object.prototype.hasOwnProperty.call(techStacks, tmp);
              })
              .map((stack) => {
                let tmp = stack[0] === '#' ? stack.substring(1) : stack;
                tmp = tmp.toLowerCase();
                return (
                  <img src={techStacks[tmp]} alt={stack} className={styles.item} key={stack} />
                );
              })}
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
