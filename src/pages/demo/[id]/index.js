import styles from 'styles/demo.module.scss';
import React, { useState } from 'react';
import { DemoContainer } from 'containers/Demo/DemoContainer';
import { useRouter } from 'next/router';
import { setComments } from 'reducers/comments';
import { setEmojis, getMyEmojis } from 'reducers/emojis';
import { ErrorContainer } from 'containers/Error/ErrorContainer';
import { LoadingSpinner } from 'components/Loading';
import { useDispatch } from 'react-redux';
import * as DemoAPI from 'axios/Demo';

export default function Demo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [IsError, setError] = useState(false);
  const [data, setData] = useState(null);

  React.useEffect(() => {
    if (router.query.id !== undefined && loading === false) {
      DemoAPI.getDemo(router.query.id)
        .then((res) => {
          setLoading(true);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(true);
          setError(err.response.status);
        });
    }
  }, [router]);

  // 로딩 완료, 에러 아닌 경우
  if (loading && IsError === false) {
    // 댓글 setting
    console.log(data);
    if (data) {
      dispatch(setComments(data.comments));
      dispatch(
        setEmojis({
          like: data.like_count,
          wow: data.wow_count,
          fire: data.fire_count,
          fun: data.fun_count,
          sad: data.sad_count,
        })
      );
      dispatch((d) => {
        getMyEmojis(d, router.query.id);
      });
    }
    return (
      <main className={styles.wrapper}>
        <DemoContainer postData={data} />
      </main>
    );
  }
  // 로딩 중인 경우
  if (!loading) {
    return (
      <main className={styles.wrapper}>
        <LoadingSpinner text="Loading ..." />
      </main>
    );
  }
  // 로딩은 완료했으나, 에러인 경우
  if (loading === true && typeof IsError === 'number') {
    return (
      <main className={styles.wrapper}>
        <ErrorContainer errorCode={IsError} />
      </main>
    );
  }
  return null;
}
