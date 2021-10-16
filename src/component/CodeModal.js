import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import CodeEditor from "@uiw/react-textarea-code-editor";
import { useFormik } from "formik";

const CodeModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      language: "",
      author: "",
    },
    onSubmit: (values) => {
      console.log(values, code);
      formik.resetForm();
      setCode("");
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} size="xl" onClose={onClose} colorScheme="purple">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="2xl">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </FormControl>

              <FormControl id="language" isRequired>
                <FormLabel>Language</FormLabel>
                <Input
                  placeholder="Language"
                  onChange={formik.handleChange}
                  value={formik.values.language}
                />
              </FormControl>

              <FormControl id="author" isRequired>
                <FormLabel>Author</FormLabel>
                <Input
                  placeholder="Author"
                  onChange={formik.handleChange}
                  value={formik.values.author}
                />
              </FormControl>
              <FormControl id="code" isRequired>
                <FormLabel>Code</FormLabel>
                <CodeEditor
                  value={code}
                  language="js"
                  placeholder="Please enter JS code."
                  onChange={(e) => setCode(e.target.value)}
                  padding={15}
                  style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  }}
                />
              </FormControl>
              <Button
                colorScheme="purple"
                mr={3}
                onClick={onClose}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CodeModal;
