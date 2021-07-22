import styles from 'styles/index.module.scss';
import { DemoContainer } from 'containers/Demo/DemoContainer';
import { useRouter } from 'next/router';
import axios from 'axios';

export async function getStaticProps(context) {
  const { id } = context.params;
  const result = await axios.get(`http://localhost:3000/api/demo/${id}`);
  const data = await result.data;

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
      <main className={styles.wrapper}>
        <DemoContainer postId={router.query.id} postData={data} />
      </main>
    );
  }
  return <div>Loading...</div>;
}

Demo.propTypes = {
  data: Object,
};
