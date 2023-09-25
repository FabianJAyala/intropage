import React, { useRef } from 'react';
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import emailjs from "emailjs-com"
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const form = useRef();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const {errors, touched, handleSubmit, getFieldProps, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Provide a valid email").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await emailjs.sendForm('service_nxlvuvj', 'template_b3rzxlg', form.current, 'HNTi0tNwRouvsr6Bz');
        onOpen('success', 'Email sent successfully!');
        resetForm();
      } catch (error) {
        console.error('Error sending email:', error);
        onOpen('error', 'Error sending email. Please try again later.');
        setSubmitting(false);
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2a6165"
      py={[4, 8, 12]}
      spacing={8}
      alignItems="center"
    >
      <VStack w={["100%", "100%", "600px"]} p={4} alignItems="center">
        <Heading as="h1" id="contactme-section" size={isMobile ? "lg" : "2xl"}>
          Contact me
        </Heading>
        <Box p={4} rounded="md" w="100%">
          <form ref={form} onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your name"
                  {...getFieldProps("firstName")}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...getFieldProps("type")}>
                  <option value="hireMe" style={{ backgroundColor: "#38A169", color: "white" }}>
                    Freelance project proposal
                  </option>
                  <option value="openSource" style={{ backgroundColor: "#38A169", color: "white" }}>
                    Full-time job proposal
                  </option>
                  <option value="other" style={{ backgroundColor: "#38A169", color: "white" }}>
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={isMobile ? "100px" : "150px"}
                  placeholder="Comment..."
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="green" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
