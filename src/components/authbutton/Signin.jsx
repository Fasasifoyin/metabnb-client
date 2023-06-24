import React from 'react';
import ButtonVariant from '../button/ButtonVariant';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Signin = ({ isSidenav }) => {
  return (
    <>
      <Link
        as={RouterLink}
        to="/account"
        display={
          isSidenav
            ? { base: `block`, xl: `none` }
            : { base: `none`, xl: `block` }
        }
      >
        <ButtonVariant
          hover={{ boxShadow: `0px 0px 0px 4px #A0227950` }}
          onClick={null}
          bg={`accent`}
          color={`white`}
          width={isSidenav ? `100%` : { base: `none`, xl: `block` }}
          height="3em"
          name="Sign in"
          display={
            isSidenav
              ? { base: `block`, xl: `none` }
              : { base: `none`, xl: `block` }
          }
        />
      </Link>
    </>
  );
};

export default Signin;
