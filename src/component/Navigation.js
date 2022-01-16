import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Collapse,
  Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navigation = ({ handleOpenModal, handleSearch, search }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <nav>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={{ base: '10px 0px 0px 0px', md: '10px 20px' }}
        color="purple.600"
        maxH="10rem"
        position="fixed"
        w="100%"
        bg="white"
        zIndex="2"
      >
        <Flex align="center" ml="5">
          <Heading as="h1" size="xl" letterSpacing={'tight'}>
            Snip
          </Heading>
        </Flex>

        <Box mr={{ base: '5px', md: '1rem' }}>
          <Stack direction={{ base: 'row' }} alignItems="center">
            <Button
              colorScheme="whiteAlpha"
              color="purple.600"
              size="lg"
              onClick={handleOpenModal}
            >
              Add Snippet
            </Button>
            <Button
              colorScheme="purple"
              onClick={onToggle}
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Stack>
          <Collapse in={isOpen} animateOpacity>
            <Box
              color="purple.900"
              bgColor="whiteAlpha.900"
              mt="4"
              rounded="md"
              shadow="md"
            >
              <Input
                variant="filled"
                placeholder="Search for the title"
                pl="20px"
                value={search}
                onChange={handleSearch}
              />
            </Box>
          </Collapse>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navigation;
