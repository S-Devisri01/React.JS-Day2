// src/Toggle.js
import React, { useState } from 'react';
import { Button, useBreakpointValue } from '@chakra-ui/react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Button
      colorScheme={isOn ? "green" : "red"}
      onClick={() => setIsOn(!isOn)}
      size={buttonSize}
      mb={4}
      variant="solid"
      width="full"
      maxW="300px"
    >
      {isOn ? "ON" : "OFF"}
    </Button>
  );
}

export default Toggle;
