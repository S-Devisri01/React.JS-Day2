# React.JS-Day2

// src/App.js
import React from 'react';
import Toggle from './Toggle';
import Timer from './Timer';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import { Box, VStack } from '@chakra-ui/react';

function App() {
  const message = "Hello, World!";
  const count = 5;

  return (
    <Box
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      bg="gray.50"
    >
      <VStack spacing={4} align="center">
        <FunctionalComponent message={message} count={count} />
        <ClassComponent message={message} count={count} />
        <Toggle />
        <Timer />
      </VStack>
    </Box>
  );
}

export default App;
