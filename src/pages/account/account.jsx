import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Signin from './Signin';
import Signup from './Signup';

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Flex
      minHeight="85vh"
      direction="column"
      gap="15px"
      justify="center"
      align="center"
      w="100%"
      px="15px"
    >
      {isSignUp ? <Signup /> : <Signin />}
      <Flex justifyContent="flex-end" w="100%" maxWidth="500px">
        <Box p="8px" bg="gray.50">
          {isSignUp ? (
            <Text>
              Already have an account?{' '}
              <span onClick={() => setIsSignUp(!isSignUp)} style={{ color: 'blue', cursor:"pointer" }}>Sign in</span>
            </Text>
          ) : (
            <Text>
              Don"t have an account?{' '}
              <span onClick={() => setIsSignUp(!isSignUp)} style={{ color: 'blue', cursor:"pointer" }}>Sign up</span>
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Account;
