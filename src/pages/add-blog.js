import MainLayout from '@/layouts/MainLayout';
import { Container } from '@nextui-org/react';
import styles from '../styles/addBlog.module.css';

const addBlog = () => {
  return (
    <MainLayout>
      <Container>
        <div className={styles.container}>add-blog</div>
      </Container>
    </MainLayout>
  );
};

export default addBlog;
