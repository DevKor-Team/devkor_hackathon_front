import styles from 'styles/index.module.scss';
import { DemoContainer } from 'containers/Demo/DemoContainer';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/demo');
  const data = await res.json();
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: true,
  };
}
export default function Demo({ data }) {
  const router = useRouter();

  if (data) {
    return (
      <div className={styles.wrapper}>
        <DemoContainer postId={router.query.id} postData={data} />
      </div>
    );
  }
  alert('네트워크 문제입니다. 확인 후 다시 시도해주세요.');
  return null;
}

Demo.propTypes = {
  data: Object,
};
