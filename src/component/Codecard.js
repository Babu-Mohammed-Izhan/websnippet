import React from 'react';
import { Box, Badge, Heading } from '@chakra-ui/react';
import { CopyBlock, shadesOfPurple } from 'react-code-blocks';

const Codecard = ({ title, code, language, author }) => {
  const languageColor = {
    python: 'blue',
    javascript: 'yellow',
    typescript: 'blue',
  };
  return (
    <Box
      minW="100%"
      borderRadius="lg"
      overflow="hidden"
      bgColor="gray.50"
      shadow="lg"
      padding={{ base: '16px', md: '0px' }}
    >
      <Box p={{ base: 1, md: 6 }}>
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
                : 'gray'
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
        <CopyBlock
          text={code}
          language={language}
          theme={shadesOfPurple}
          codeBlock
        />
      </Box>
    </Box>
  );
};

export default Codecard;
