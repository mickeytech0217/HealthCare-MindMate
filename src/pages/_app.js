import '@/styles/globals.css';
import { motion } from 'framer-motion';
import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps, router }) {
  return (
    <NextUIProvider>
      <motion.div
        key={router.route}
        transition={{
          delay: 0.5,
          x: { duration: 0.5 },
          default: { ease: 'linear' },
        }}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
          pageExit: { opacity: 0 },
        }}
      >
        <NextNProgress height={5} />
        <Component {...pageProps} />
      </motion.div>
      <Analytics />
    </NextUIProvider>
  );
}

export default App;
