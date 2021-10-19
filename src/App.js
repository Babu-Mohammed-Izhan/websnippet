import React, { useEffect, useState } from "react";
import {
  Box,
  ChakraProvider,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import Navigation from "./component/Navigation";
import Codecard from "./component/Codecard";
import CodeModal from "./component/CodeModal";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [filteredData, setfilteredData] = useState(data);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/snip`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setfilteredData(data);
      });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openEnterModal = () => {
    onOpen();
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const result = data.filter((d) =>
      d.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setfilteredData(result);
  };

  return (
    <ChakraProvider>
      <Box bgColor="purple.600">
        <Navigation
          handleOpenModal={() => openEnterModal()}
          handleSearch={handleSearch}
        />
        <Box bgColor="purple.600" minH="100vh" p="10px 20px 20px 20px">
          <Box marginLeft="15px" marginRight="15px">
            <SimpleGrid columns={[1, null, 2, 3]} spacing="20px">
              {filteredData &&
                filteredData.map((code, idx) => {
                  return (
                    <Codecard
                      key={idx}
                      title={code.title}
                      language={code.language}
                      code={code.code}
                      author={code.author}
                    />
                  );
                })}
            </SimpleGrid>
          </Box>
        </Box>
        <CodeModal
          isOpen={isOpen}
          onClose={onClose}
          data={filteredData}
          setData={setfilteredData}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
