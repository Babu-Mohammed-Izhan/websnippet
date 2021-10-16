import React from "react";
import { Box, ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Navigation />
      <Box bgColor="purple.800" minH="100vh">
        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
            <Codecard
              language="javascript"
              code="console.log('Hello');"
              author="izhan"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
