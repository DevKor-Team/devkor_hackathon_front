import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/containers/teamContainer.module.scss';
import { MemberItem } from 'components/MemberItem';
import ButtonItem from 'components/Button';
import copyToClipBoard from 'components/CopyToClipBoard';
import { getTeamToken } from 'axios/Team';

const copyTeamInviteLink = async (teamId) => {
  if (teamId) {
    try {
      const { token } = (await getTeamToken(teamId)).data;
      const url = `${window.location.protocol}//${window.location.host}/team/${teamId}/register?token=${token}`;
      copyToClipBoard(url);
    } catch (err) {
      console.dir(err);
    }
  }
};

const defaultOnClick = () => {
  alert('준비 중인 기능입니다.');
};

export const MyTeamItem = ({ data, setCurrTeamId, isMyTeam }) => (
  <>
    <TeamItem data={data} />
    {isMyTeam && (
      <div className={styles.buttonwrapper}>
        <ButtonItem
          text="팀 초대링크 복사하기"
          onClick={() => {
            copyTeamInviteLink(data.id);
          }}
        />
        <ButtonItem
          text="팀 탈퇴하기"
          onClick={() => {
            setCurrTeamId(data.id);
          }}
        />
      </div>
    )}
  </>
);

export const RegisterTeamItem = ({ data, setCurrTeamId, isMyTeam }) => (
  <>
    <TeamItem data={data} />
    {isMyTeam ? (
      <p> 이미 가입한 팀입니다! &#128513;</p>
    ) : (
      <div className={styles.buttonwrapper}>
        <ButtonItem
          text="팀 가입하기"
          onClick={() => {
            setCurrTeamId(data.id);
          }}
        />
      </div>
    )}
  </>
);

export const TeamItem = ({ data }) => (
  <>
    <div className={styles.title}>팀명 : {data.name}</div>
    <div className={styles.membertitle}>멤버 구성({data.users ? data.users.length : 0})</div>
    <div className={styles.memberwrapper}>
      {data.users &&
        data.users.map((item) => {
          return (
            <MemberItem
              title={`${item.last_name} ${item.first_name}`}
              sub="Member"
              onClick={defaultOnClick}
              key={item.id}
            />
          );
        })}
    </div>
  </>
);

TeamItem.propTypes = {
  data: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    users: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
      })
    ),
  }),
};

MyTeamItem.propTypes = {
  data: TeamItem.propTypes.data,
  setCurrTeamId: PropTypes.func,
  isMyTeam: PropTypes.bool,
};

RegisterTeamItem.propTypes = {
  data: TeamItem.propTypes.data,
  setCurrTeamId: PropTypes.func,
  isMyTeam: PropTypes.bool,
};
