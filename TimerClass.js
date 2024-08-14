// src/TimerClass.js
import React, { Component } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

class TimerClass extends Component {
  state = { seconds: 0, isActive: false };

  componentDidMount() {
    this.interval = null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleTimer = () => {
    this.setState(prevState => {
      if (prevState.isActive) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => {
          this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
      }
      return { isActive: !prevState.isActive };
    });
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({ seconds: 0, isActive: false });
  };

  render() {
    const { seconds, isActive } = this.state;

    return (
      <Box textAlign="center">
        <Text fontSize="2xl">{seconds} seconds</Text>
        <Button
          colorScheme={isActive ? "red" : "green"}
          onClick={this.toggleTimer}
          m={2}
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button colorScheme="blue" onClick={this.resetTimer} m={2}>
          Reset
        </Button>
      </Box>
    );
  }
}

export default TimerClass;
