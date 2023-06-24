import React, { useEffect } from 'react';
import ButtonVariant from '../button/ButtonVariant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

import { useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import { useSelector } from 'react-redux';
import { selectedUser } from '../../features/authSlice';

const Logout = ({ isSidenav }) => {
  const user = useSelector(selectedUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const loggingOut = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    const token = user?.token;

    if (!token) {
      return;
    }

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        loggingOut();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user?.token]);

  return (
    <>
      <ButtonVariant
        hover={{ boxShadow: `0px 0px 0px 4px #A0227950` }}
        onClick={loggingOut}
        bg={`accent`}
        color={`white`}
        width={isSidenav ? `100%` : { base: `none`, xl: `block` }}
        height="3em"
        name="Logout"
        display={
          isSidenav
            ? { base: `block`, xl: `none` }
            : { base: `none`, xl: `block` }
        }
      />
    </>
  );
};

export default Logout;
