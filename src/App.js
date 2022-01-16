import React, { useEffect, useState } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  useColorModeValue,
  ChakraProvider,
  SimpleGrid,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Navigation from './component/Navigation';
import Codecard from './component/Codecard';
import CodeModal from './component/CodeModal';
import './App.css';

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

function App() {
  const [data, setdata] = useState([]);
  const [filteredData, setfilteredData] = useState(data);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}api/snip`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setfilteredData(data);
      });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEnterModal = () => {
    onOpen();
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const result = data.filter((d) =>
      d.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setfilteredData(result);
  };

  return (
    <ChakraProvider>
      <Box>
        <Navigation
          handleOpenModal={() => openEnterModal()}
          handleSearch={handleSearch}
        />
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'purple.400',
                    zIndex: -1,
                  }}
                >
                  Write once,
                </Text>
                <br />
                <Text as={'span'} color={'purple.500'}>
                  use everywhere!
                </Text>
              </Heading>
              <Text color={'gray.500'}>
                Snip is a rich coding snippets app that lets you create your own
                code snippets, use other popular snippets and copy them to your
                clipboard with a single click. All that is free!
              </Text>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('purple.50', 'purple.400')}
              />
              <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}
              >
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Box minH="100vh" p="10px 20px 20px 20px">
          <Box marginLeft="15px" marginRight="15px">
            <SimpleGrid columns={[1, null, 2, 3]} spacing="20px" column>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry>
                  {filteredData ? (
                    filteredData &&
                    filteredData.map((code, idx) => {
                      return (
                        <Codecard
                          key={idx}
                          title={code.title}
                          language={code.language}
                          code={code.code}
                          author={code.author}
                        />
                      );
                    })
                  ) : (
                    <Spinner color="purple.500" size="lg" />
                  )}
                </Masonry>
              </ResponsiveMasonry>
            </SimpleGrid>
          </Box>
        </Box>
        <CodeModal
          isOpen={isOpen}
          onClose={onClose}
          data={filteredData}
          setData={setfilteredData}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
