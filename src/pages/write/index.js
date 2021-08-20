import React from 'react';
import CheckLogin from 'containers/CheckLogin';
import CheckLeader from 'containers/CheckLeader';
import WriteContainer from 'containers/Write/WriteContainer';
import { useRouter } from 'next/router';
import TeamSelectContainer from 'containers/Write/TeamSelectContainer';

export default function WritePage() {
  const router = useRouter();
  const { phase } = router.query;

  return (
    // check permission - 로그인, 팀장
    <CheckLogin>
      <CheckLeader>
        {['1', '2'].includes(phase) && phase === '2' ? <WriteContainer /> : <TeamSelectContainer />}
      </CheckLeader>
    </CheckLogin>
  );
}
