import React from "react";
import { Box, Badge, Heading } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";

const Codecard = ({ title, code, language, author }) => {
  const languageColor = {
    python: "blue",
    javascript: "yellow",
  };
  return (
    <Box
      minW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="gray.50"
      borderColor="purple.100"
      shadow="lg"
    >
      <Box p="6">
        <Heading fontSize="2xl" color="purple.500" paddingBottom="12px">
          {title.toUpperCase()}
        </Heading>
        <Box display="flex" alignItems="baseline" paddingBottom="10px">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={
              languageColor[language.toLowerCase()]
                ? languageColor[language.toLowerCase()]
                : "gray"
            }
          >
            {language}
          </Badge>
          <Box
            color="purple.500"
            fontWeight="bold"
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
