import React from "react";
import { Box, Badge } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";

const Codecard = ({ code, language, author }) => {
  return (
    <Box
      minW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="purple.900"
      borderColor="green.900"
    >
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="yellow">
            {language}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Made by {author}
          </Box>
        </Box>
        <CopyBlock text={code} language={language} theme={dracula} codeBlock />
      </Box>
    </Box>
  );
};

export default Codecard;
