import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={isMobile ? 2 : 12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text fontSize={isMobile ? "sm" : "md"} textAlign="center">
            Fabian Ayala • © 2023
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
