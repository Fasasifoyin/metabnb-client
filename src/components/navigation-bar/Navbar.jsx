import { Flex, Image, Center, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ConnectWallet from '../modal/ConnectWallet';

import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';
import Signin from '../authbutton/Signin';

import { useSelector } from 'react-redux';
import { selectedUser } from '../../features/authSlice';
import Logout from '../authbutton/logout';

const Navbar = () => {
  // const ref = useRef();
  const user = useSelector(selectedUser);

  useEffect(() => {
    // const div = ref.current;
    // document.addEventListener('DOMContentLoaded', () => {
    //   window.addEventListener('scroll', () => {
    //     let { clientHeight } = this.$refs.nav.$el;
    //     window.scrollY > clientHeight
    //       ? (this.fixed = true)
    //       : (this.fixed = false);
    //     window.scrollY > 1000
    //       ? this.$refs.topButton.$el.classList.remove('d-none')
    //       : this.$refs.topButton.$el.classList.add('d-none');
    //   });
    // });
  });

  return (
    <Flex
      className="page_alignment cc-container"
      justifyContent={`space-between`}
      alignItems={`center`}
      height={`3rem`}
    >
      <Center>
        <Link as={RouterLink} to={`/`}>
          <Image
            w={{ base: `70%`, sm: `100%` }}
            alt="logo"
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group-1_ytb0ig.png`}
          />
        </Link>
      </Center>
      <Links />
      <Sidenav user={user} />
      {user?.id ? <ConnectWallet /> : <Signin />}
      {user?.id && <Logout />}
    </Flex>
  );
};

export default Navbar;
