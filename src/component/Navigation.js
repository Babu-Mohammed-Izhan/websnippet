import { Box, Stack, Heading, Flex, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navigation = ({ handleOpenModal, handleSearch }) => {
  return (
    <nav>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
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
              onClick={handleSearch}
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navigation;
