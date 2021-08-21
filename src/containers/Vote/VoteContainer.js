import React from 'react';
import PropTypes from 'prop-types';
import { getDemoList } from 'axios/Demo';
import DateCalculator from 'components/hooks/DateCalculator';
import moment from 'moment';
import ProjectItem from 'components/Project/ProjectCard';
import styles from 'styles/components/vote/voteSelector.module.scss';
import containerStyles from 'styles/containers/voteContainer.module.scss';
import { PromisePopup } from 'components/Popup';
import { ButtonItem2 } from 'components/Button';
import * as VoteAPI from 'axios/Vote';
import { useSelector } from 'react-redux';

const VoteSelector = ({ title, demos, voteKey, vote, setVoteByKey }) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.toggleBox}>
        <button
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`${styles.toggleButton} ${toggle ? styles.on : ''}`}
        >
          <svg viewBox="0 0 100 100">
            <polygon points="5.9,88.2 50,11.8 94.1,88.2" />
          </svg>
        </button>
        <p className={`${styles.title} ${toggle ? styles.on : ''}`}>{title}</p>
      </div>
      <div className={`${styles.demoWrapper} ${toggle ? '' : styles.off}`}>
        <div className={styles.demoBox}>
          {demos.map((demo) => (
            <div className={styles.projectItemBox}>
              <button
                type="submit"
                onClick={() => {
                  setVoteByKey(voteKey, demo.id);
                }}
                aria-label="vote"
                className={demo.id === vote[voteKey] && styles.active}
              >
                {demo.id === vote[voteKey] && <img src="/static/favicon.ico" alt="check" />}
              </button>
              <ProjectItem demo={demo} key={demo.id} />
            </div>
          ))}
        </div>{' '}
      </div>
    </div>
  );
};

VoteSelector.propTypes = {
  title: PropTypes.string,
  demos: PropTypes.array,
  vote: PropTypes.object,
  setVoteByKey: PropTypes.func,
  voteKey: PropTypes.string,
};

const VoteContainer = () => {
  const [demos, setDemos] = React.useState([]);
  const [vote, setVote] = React.useState({
    1: null,
    2: null,
    3: null,
  });
  const [popup, setPopup] = React.useState(false);
  const teamInfo = useSelector((state) => state.users.team);
  console.log(teamInfo);

  const setVoteByKey = (key, demoId) => {
    if (Object.keys(vote).includes(key)) {
      if (vote[key] === demoId) {
        setVote({
          ...vote,
          [key]: null,
        });
      } else {
        setVote({
          ...vote,
          [key]: demoId,
        });
      }
    }
  };

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
    <>
      <div className={containerStyles.subject}>
        {Object.keys(vote).join(', ')}순위를 선택해주세요!
      </div>
      {Object.keys(vote).map((key) => {
        return (
          <VoteSelector
            demos={demos.filter((demo) => {
              return !Object.values(vote).includes(demo.id) || vote[key] === demo.id;
            })}
            title={`${key}순위`}
            setVoteByKey={setVoteByKey}
            voteKey={key}
            vote={vote}
          />
        );
      })}
      <div className={containerStyles.buttonWrapper}>
        <ButtonItem2
          text="투표하기"
          onClick={() => setPopup(true)}
          className={containerStyles.button}
          color="black"
        />
      </div>
      {popup && (
        <PromisePopup
          title="투표하시겠습니까?"
          promiseOnClickY={() => {
            const demo = [vote['1'], vote['2'], vote['3']];
            if (demo.includes(null)) {
              return new Error('모든 팀을 투표해주셔야 합니다.');
            }
            return VoteAPI.vote({
              team: teamInfo[0].id,
              demo,
            })
              .then((res) => {
                return res;
              })
              .catch((err) => {
                return new Error(err.message);
              });
          }}
          onClickN={() => setPopup(false)}
        />
      )}
    </>
  );
};

export default VoteContainer;
