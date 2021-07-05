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

  if (!router.isFallback) {
    return (
      <div className={styles.wrapper}>
        <DemoContainer postId={router.query.id} postData={data} />
      </div>
    );
  }
  return <div>Loading...</div>;
}

Demo.propTypes = {
  data: Object,
};
