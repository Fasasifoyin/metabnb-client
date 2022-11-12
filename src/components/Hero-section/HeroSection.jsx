import { Heading, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { HeroImage } from '../../assets/images-and-icons';
import SearchInput from './SearchInput';

const HeroSection = () => {
  return (
    <Flex
      className="page_alignment"
      flexDir={{ base: `column-reverse`, lg: `row` }}
      justifyContent={`space-between`}
      my={5}
    >
      <Flex
        flexDir={`column`}
        width={{ lg: `60%` }}
        justifyContent={`center`}
        pr={{ lg: 20 }}
        textAlign={{
          base: `center`,
          sm: `initial`,
          md: `center`,
          lg: `initial`,
        }}
      >
        <Heading
          className="heading_title"
          fontSize={`3.5rem`}
          fontWeight={`medium`}
          lineHeight={`78.4px`}
        >
          Rent a{' '}
          <Text
            as={`span`}
            fontSize={`3.5rem`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Place
          </Text>{' '}
          away from{' '}
          <Text
            as={`span`}
            fontSize={`3.5rem`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Home
          </Text>{' '}
          in the{' '}
          <Text
            as={`span`}
            fontSize={`3.5rem`}
            fontWeight={`bold`}
            color={`accent`}
          >
            Metaverse
          </Text>
        </Heading>

        <Text fontSize={`2xl`} my={12} lineHeight={`2.18rem`}>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Text>
        <SearchInput />
      </Flex>
      <Flex width={{ lg: `40%` }} justifyContent={{ xl: `end` }}>
        <Image
          mx={{ base: `auto`, xl: `initial` }}
          alt="hero-image"
          src={HeroImage}
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;