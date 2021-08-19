import useSearchTags from 'components/hooks/useSearchTags';
import React from 'react';
import styles from 'styles/containers/banner2.module.scss';

export const Banner2 = () => {
  const [tags, toggleTag] = useSearchTags();
  console.log(tags);
  return (
    <div className={styles.banner2}>
      <span>TAGS</span>
      <div className={styles.tagbox}>
        {tags.map((tag, index) => {
          return (
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                toggleTag(index);
              }}
              className={`${styles.tagbox__item} ${tag.active ? styles.active : ''}`}
            >
              {tag.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner2;
