import React from "react";
import { Box, ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box bgColor="purple.800">
        <Navigation />
        <Box bgColor="purple.800" minH="100vh">
          <Box marginLeft="15px" marginRight="15px" marginTop="20px">
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
      </Box>
    </ChakraProvider>
  );
}

export default App;
