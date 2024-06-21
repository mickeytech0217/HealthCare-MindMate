import MainLayout from '@/layouts/MainLayout';
import { Container } from '@nextui-org/react';
import styles from '../styles/blog.module.css';
import Head from 'next/head';

const Blog = () => {
  return (
    <MainLayout>
      <Head>
        <title>MindMate - Blog</title>
      </Head>
      <Container>
        <div className={styles.container}></div>
      </Container>
    </MainLayout>
  );
};

export default Blog;
