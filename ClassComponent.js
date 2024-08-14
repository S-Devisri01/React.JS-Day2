// src/ClassComponent.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

class ClassComponent extends Component {
  render() {
    const { message, count } = this.props;
    return (
      <Box
        p={6}
        mb={4}
        bg="purple.200"
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
}

ClassComponent.propTypes = {
  message: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ClassComponent;
