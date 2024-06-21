import MainLayout from '@/layouts/MainLayout';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Card,
  Button,
  Loading,
  Text,
  Badge,
} from '@nextui-org/react';
import React from 'react';
import Head from 'next/head';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [problem, setProblem] = useState('');
  const [problemStatus, setProblemStatus] = useState('primary');
  const [solution, setSolution] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (problem == '') {
      setProblemStatus('error');
      setTimeout(() => {
        setProblemStatus('primary');
      }, 3000);

      return;
    } else {
      setSolution('');
      setIsLoading(true);
      await axios
        .post('https://mind-mate-sv15.onrender.com/api/conversation', {
          problem: problem,
        })
        .then(function (response) {
          let formattedResponse = response.data.text;
          formattedResponse = formattedResponse.replace(/^\n/, '');
          formattedResponse = formattedResponse.replace(/^\n/, '');
          setSolution(formattedResponse);
          setProblem('');
          setIsLoading(false);
        })
        .catch(function (error) {
          setProblem('');
          setIsLoading(false);
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>MindMate - Support</title>
      </Head>
      <Container>
        <motion.form
          onSubmit={handleSubmit}
          transition={{
            type: 'spring',
            damping: 15,
            delay: 0.5,
            duration: 1,
          }}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <Card
            variant='bordered'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '0.5rem',
              height: 'calc(100vh - 120px)',
              margin: '0.5rem 0rem',
              padding: '0.5rem',
            }}
          >
            <Text
              b
              style={{
                marginBottom: '0.5rem',
                marginLeft: '2rem',
                marginRight: '2rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              AI Health Support
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Badge
                  color='success'
                  variant='dot'
                  style={{ marginLeft: '0.5rem' }}
                />
                <Text style={{ fontWeight: 400, marginLeft: '0.2rem' }}>
                  Online
                </Text>
              </div>
            </Text>
            <Card.Divider />
            <Card
              variant='flat'
              style={{
                display: 'flex',
                height: 'calc(100% - 12rem)',
                margin: '0.5rem 0',
                borderRadius: '0.5rem',
                backgroundColor: 'primary',
                overflowY: 'auto',
                overflowX: 'hidden',
                maxWidth: '100%',
              }}
            >
              {isLoading ? (
                <Loading
                  style={{ paddingTop: '0.4rem', alignSelf: 'flex-start' }}
                  type='points'
                />
              ) : errorMessage ? (
                <Card
                  variant='flat'
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <Badge
                    color='error'
                    style={{
                      maxHeight: '1.4rem',
                      lineHeight: '1.4rem',
                      marginTop: '0.2rem',
                      marginRight: '0.5rem',
                    }}
                  >
                    Error
                  </Badge>
                  <Text color='error'>{errorMessage}</Text>
                </Card>
              ) : (
                <p style={{ whiteSpace: 'pre-line', padding: '0.5rem' }}>
                  {solution}
                </p>
              )}
            </Card>
            <Card
              variant='bordered'
              style={{
                display: 'flex',
                borderRadius: '0.5rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <Card
                style={{
                  display: 'flex',
                  borderRadius: '0.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <textarea
                  style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: '0.5rem',
                    pointerEvents: isLoading ? 'none' : 'all',
                    color: isLoading ? '#8c8c8c' : 'unset',
                    resize: 'none',
                    border: 'none',
                    outline: 'none',
                  }}
                  status={problemStatus}
                  readOnly={isLoading}
                  name='query'
                  aria-label='query'
                  placeholder='Type your problem here..'
                  onChange={(e) => setProblem(e.target.value)}
                  value={problem}
                  rows={4}
                />
                <Button
                  id='submit'
                  type='submit'
                  disabled={isLoading}
                  aria-label='submit'
                  style={{ width: '100vw' }}
                >
                  {isLoading && (
                    <Loading
                      color='currentColor'
                      size='sm'
                      style={{ marginRight: '1rem' }}
                    />
                  )}
                  Ask from MindMate
                </Button>
              </Card>
            </Card>
          </Card>
        </motion.form>
      </Container>
    </MainLayout>
  );
};

export default Chat;
