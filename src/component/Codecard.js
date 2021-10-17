import React from "react";
import { Box, Badge, Heading } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";

const Codecard = ({ title, code, language, author }) => {
  const languageColor = {
    python: "blue",
    javascript: "yellow",
    c: "blue",
    "c++": "blue",
  };
  return (
    <Box
      minW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="purple.800"
      borderColor="purple.800"
    >
      <Box p="6">
        <Heading fontSize="2xl" color="whiteAlpha.900" paddingBottom="12px">
          {title.toUpperCase()}
        </Heading>
        <Box display="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={languageColor[language]}
          >
            {language}
          </Badge>
          <Box
            color="purple.100"
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
