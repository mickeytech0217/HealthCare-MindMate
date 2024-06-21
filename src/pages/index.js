import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout';
import Lottie from 'lottie-react';
import heroImage from '../assets/animation-svg/mediHeroImage.json';
import blob1 from '../assets/images/blob1.svg';
import blob2 from '../assets/images/blob2.svg';
import blob3 from '../assets/images/blob3.svg';
import { Container, Text, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../styles/index.module.css';

export default function Home() {
  const router = useRouter();

  const handleClickSupport = () => {
    router.push('/support');
  };
  return (
    <>
      <Head>
        <title>MindMate - Home</title>
      </Head>
      <MainLayout>
        <Container>
          <motion.div className={styles.container}>
            <Image
              className={styles.blob1}
              src={blob1}
              width='auto'
              height='auto'
              alt='blob1'
            />
            <Image
              priority={true}
              className={styles.blob2}
              src={blob2}
              width='auto'
              height='auto'
              alt='blob2'
            />
            <Image
              className={styles.blob3}
              src={blob3}
              width='auto'
              height='auto'
              alt='blob3'
            />
            <motion.div
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 200,
                opacity: 0,
              }}
              className={styles.heroText}
            >
              <Text
                className={`${styles.headerTitle} textAnimate`}
                weight='bold'
              >
                Unlock the Power of Your Mind with Our AI-Driven Mental Health
                Web Application
              </Text>
              <Text className={`${styles.subHeading} textAnimate`}>
                Get personalized mental health solutions based on your unique
                needs and preferences.
              </Text>

              <Button className={styles.tryBtn} onPress={handleClickSupport}>
                Get Support
              </Button>
            </motion.div>
            <motion.div
              className={styles.heroImage}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              initial={{
                x: 200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: -200,
                opacity: 0,
              }}
            >
              <Lottie priority='true' animationData={heroImage} />
            </motion.div>
          </motion.div>
        </Container>
      </MainLayout>
    </>
  );
}
