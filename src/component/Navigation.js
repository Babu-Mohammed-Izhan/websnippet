import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Collapse,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navigation = ({ handleOpenModal, handleSearch, search }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <nav>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={["50px 0px 24px 0px", 6, 6, 6]}
        bg="purple.600"
        color="white"
        maxH="10rem"
      >
        <Flex align="center" ml="10" mr="7">
          <Heading as="h1" size="lg" letterSpacing={"tight"}>
            Snip
          </Heading>
        </Flex>

        <Box mr="10">
          <Stack direction={{ base: "row", md: "row" }} alignItems="center">
            <Button colorScheme="purple" onClick={handleOpenModal}>
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
