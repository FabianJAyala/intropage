import { Stack, Heading, Image, Text, Card, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const CardTemplate = ({ title, description, imageSrc, link }) => {
  return (
    <Card maxW='md'>
      <CardBody>
        <Image
          src={imageSrc}
          borderRadius='md'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          as='a'
          href={link}
          variant='solid'
          colorScheme='facebook'
          target='_blank'
          rel='noopener noreferrer'
          rightIcon={<ArrowForwardIcon />}
        >
          See more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
