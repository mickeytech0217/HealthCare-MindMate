import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import styles from '../styles/resources.module.css';
import { Card, Grid, Text, Container } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import brainHeart from '../assets/images/blog-images/brain-heart.jpg';
import yellowSmiles from '../assets/images/blog-images/yellow-smile-faces.jpg';
import mentalHealthMatters from '../assets/images/blog-images/mental-health-matters.jpg';
import meditation from '../assets/images/blog-images/meditation.jpg';
import billBoards from '../assets/images/blog-images/bill-boards.jpg';
import thinkingGirl from '../assets/images/blog-images/thinking-girl.jpg';
import { motion } from 'framer-motion';

const Resources = () => {
  const posts = [
    {
      title: 'Understanding Mental Health',
      url: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response',
      image: brainHeart,
      subTitle:
        "Mental health is the state of a person's emotional and psychological well-being.",
    },
    {
      title: 'Importance Of Mental Health',
      url: 'https://www.verywellmind.com/the-importance-of-mental-health-for-wellbeing-5207938',
      image: yellowSmiles,
      subTitle:
        "Mental health is essential for overall well-being and affects a person's emotions, and behaviors.",
    },
    {
      title: 'Common Mental Health Disoders',
      url: 'https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses',
      image: mentalHealthMatters,
      subTitle:
        "Common mental health disorders are conditions that affect a person's emotional, psychological, and etc.",
    },
    {
      title: 'Mindfulness And Meditation',
      url: 'https://www.verywellmind.com/mindfulness-meditation-88369',
      image: meditation,
      subTitle:
        'Mindfulness is the act of paying attention to the present moment, while meditation is a practice to increase inner peace.',
    },
    {
      title: 'Suicide Prevention',
      url: 'https://www.nimh.nih.gov/health/topics/suicide-prevention',
      image: billBoards,
      subTitle:
        'Suicide prevention is the collective effort to reduce the risk of suicide through awareness, education, and support.',
    },
    {
      title: 'What Is Depression?',
      url: 'https://www.psychiatry.org/patients-families/depression/what-is-depression',
      image: thinkingGirl,
      subTitle:
        'Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and etc.',
    },
  ];

  return (
    <MainLayout>
      <Head>
        <title>MindMate - Resources</title>
      </Head>
      <Container>
        <Grid.Container gap={4} className={styles.container}>
          {posts.map((post, index) => {
            index++;
            return (
              <Grid key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                <motion.div
                  transition={{
                    delay: index * 0.3,
                    duration: 0.5,
                  }}
                  initial={{
                    y: -50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                >
                  <Link href={post.url} target='_blank'>
                    <Card className={styles.card} isPressable>
                      <Card.Header>
                        <Text b>{post.title}</Text>
                      </Card.Header>
                      <Card.Divider />
                      <Image
                        className={styles.cardImage}
                        showskeleton='true'
                        src={post.image}
                        alt='smile'
                      ></Image>
                      <Card.Body>
                        <Text p='true'>{post.subTitle}</Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </motion.div>
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export default Resources;
