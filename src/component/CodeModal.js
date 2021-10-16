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
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

import CodeEditor from "@uiw/react-textarea-code-editor";
import { Form, Formik } from "formik";

const CodeModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");
  return (
    <>
      <Modal isOpen={isOpen} size="xl" onClose={onClose} colorScheme="purple">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader size="2xl">Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form>
                  {({ field, form }) => (
                    <FormControl id="title" isRequired>
                      <FormLabel>Title</FormLabel>
                      <Input {...field} placeholder="Title" />
                      <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                    </FormControl>
                  )}
                  {({ field, form }) => (
                    <FormControl id="language" isRequired>
                      <FormLabel>Language</FormLabel>
                      <Input {...field} placeholder="Language" />
                      <FormErrorMessage>
                        {form.errors.language}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                  {({ field, form }) => (
                    <FormControl id="author" isRequired>
                      <FormLabel>Author</FormLabel>
                      <Input {...field} placeholder="Author" />
                      <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                    </FormControl>
                  )}
                  {({ field, form }) => (
                    <FormControl id="code" isRequired>
                      <FormLabel>Code</FormLabel>
                      <CodeEditor
                        {...field}
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
                  )}
                  <Button
                    colorScheme="purple"
                    mr={3}
                    onClick={onClose}
                    isLoading={props.isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
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
