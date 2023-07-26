import { Stack, Heading, Image, Text, Card, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
          colorScheme='gray'
          target='_blank'
          rel='noopener noreferrer'
        >
          See moreㅤ
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
