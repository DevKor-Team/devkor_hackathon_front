import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/projectContainer.module.scss';
import ProjectItem from 'components/Project/ProjectCard';
import { getDemoList } from 'axios/Demo';
import DateCalculator from 'components/hooks/DateCalculator';
import moment from 'moment';

export const ProjectContainer = ({ searchTags = [] }) => {
  const [demos, setDemos] = React.useState([]);

  React.useEffect(() => {
    const getDemos = async () => {
      try {
        const res = await getDemoList();
        setDemos(
          res.data.results.map((data) => {
            const { id, title, thumbnail, tags } = data;
            const team = {
              id: data.team.id,
              name: data.team.name,
            };
            const createdDateObj = data.created_at
              ? new DateCalculator(data.created_at, moment())
              : '';
            const updatedDateObj = data.updated_at
              ? new DateCalculator(data.updated_at, moment())
              : '';
            return {
              id,
              title,
              subtitle: data.sub_title,
              thumbnail,
              team,
              tags,
              techStacks: data.tech_stacks,
              comments: data.comments.length,
              createdAt: createdDateObj && createdDateObj.diffAuto(),
              updatedAt: updatedDateObj && updatedDateObj.diffAuto(),
              like:
                data.like_count +
                data.wow_count +
                data.fire_count +
                data.fun_count +
                data.sad_count,
              show: data.show,
            };
          })
        );
      } catch (err) {
        console.dir(err);
      }
    };
    getDemos();
  }, []);

  return (
    <div className={styles.wrapper}>
      {demos
        .filter((demo) => {
          const refinedTechStacks = demo.techStacks.map((item) =>
            item[0] === '#' ? item.substring(1).toLowerCase() : item.toLowerCase()
          );
          if (searchTags.length === 0) return true;
          return searchTags.every((r) => {
            return refinedTechStacks.includes(r);
          });
        })
        .map((demo) => {
          return <ProjectItem demo={demo} key={demo.id} />;
        })}
    </div>
  );
};

ProjectContainer.propTypes = {
  searchTags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectContainer;
