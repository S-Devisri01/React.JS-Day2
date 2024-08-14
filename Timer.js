// src/Timer.js
import React, { useState, useEffect } from 'react';
import { Button, Box, Text, useBreakpointValue } from '@chakra-ui/react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <Box
      textAlign="center"
      mb={4}
      p={6}
      bg="gray.300"
      borderRadius="md"
      shadow="lg"
      w="full"
      maxW="sm"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        {seconds} seconds
      </Text>
      <Button
        colorScheme={isActive ? "red" : "green"}
        onClick={() => setIsActive(!isActive)}
        size={buttonSize}
        m={2}
        width="full"
        maxW="300px"
      >
        {isActive ? "Pause" : "Start"}
      </Button>
      <Button
        colorScheme="blue"
        onClick={resetTimer}
        size={buttonSize}
        m={2}
        width="full"
        maxW="300px"
      >
        Reset
      </Button>
    </Box>
  );
}

export default Timer;
