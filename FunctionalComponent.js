// src/FunctionalComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

function FunctionalComponent({ message, count }) {
  return (
    <Box
      p={6}
      mb={4}
      bg="teal.200"
      borderRadius="md"
      shadow="lg"
      w="full"
      maxW="sm"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
        {message}
      </Text>
      <Text fontSize="lg" color="white">
        Count: {count}
      </Text>
    </Box>
  );
}

FunctionalComponent.propTypes = {
  message: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FunctionalComponent;
