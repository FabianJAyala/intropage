import { Stack, Heading, Image, Text, Card, CardBody, CardFooter, Button, useBreakpointValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const CardTemplate = ({ title, description, imageSrc, link }) => {
  const imageMaxHeight = useBreakpointValue({ base: "200px", sm: "250px", md: "300px" });
  const titleSize = useBreakpointValue({ base: "md", sm: "sm", md: "md" });
  const descriptionSize = useBreakpointValue({ base: "sm", sm: "md" });

  return (
    <Card maxW="md">
      <CardBody>
        <Image src={imageSrc} borderRadius="md" maxH={imageMaxHeight} />
        <Stack mt="6" spacing="3">
          <Heading size={titleSize}>{title}</Heading>
          <Text fontSize={descriptionSize}>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          as="a"
          href={link}
          variant="solid"
          colorScheme="facebook"
          target="_blank"
          rel="noopener noreferrer"
          rightIcon={<ArrowForwardIcon />}
        >
          See more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
