import React from "react";
import { Avatar, Heading, VStack, Stack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/Fabian-Ayala-Profile.png"

const greeting = "Hello, I am Fabian Ayala!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Stack spacing={14}>
      <VStack>
        <Avatar size='2xl' name='Fabian' src={profile} />
        <Heading as='h4' size='lg'>
          {greeting}
        </Heading>
      </VStack>
      <VStack>
        <Heading as='h1' size='4xl' noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as='h1' size='4xl' noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </Stack>
  </FullScreenSection>
);

export default LandingSection;
