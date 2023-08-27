import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/Fabian-Ayala-Profile.png";

const greeting = "Hello, I am Fabian Ayala!";
const bio1 = "An Industrial and Systems Engineer";
const bio2 = "Specialized as a Front-End Developer";
const aboutme =
  "Developed many entrepreneurial ventures in my career. But now I am focused and enjoying software development as it presents new challenges. I am motivated by the opportunity that software positively impacts the world.";

const LandingSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Stack spacing={isMobile ? 4 : 12}>
        <VStack>
          <Avatar size={isMobile ? "2xl" : "2xl"} name="Fabian" src={profile} />
          <Heading as="h1" size={isMobile ? "lg" : "xl"}>
            {greeting}
          </Heading>
        </VStack>
        <VStack>
          <Heading as="h2" size={isMobile ? "md" : "xl"} noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as="h2" size={isMobile ? "md" : "xl"} noOfLines={1}>
            {bio2}
          </Heading>
        </VStack>
        <VStack textAlign="center">
          <Heading as="h2" size={isMobile ? "md" : "lg"} noOfLines={1}>
            About Me
          </Heading>
          <Text maxW="560px" noOfLines={isMobile ? 5 : 3}>
            {aboutme}
          </Text>
        </VStack>
      </Stack>
    </FullScreenSection>
  );
};

export default LandingSection;
