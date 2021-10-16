import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <nav>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={4}
        bg="purple.700"
        color="white"
      >
        <Flex align="center" ml="10" mr="7">
          <Heading as="h1" size="lg" letterSpacing={"tight"}>
            Snip
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <IconButton
            aria-label="Hamburger-icon"
            icon={<HamburgerIcon />}
            variant="outline"
          />
        </Box>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
          mr="10"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <Text>Add Snippet</Text>
          </Stack>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navigation;
