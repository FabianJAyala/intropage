import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import useScrollDirection from "../hooks/useScrollDirection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: fabiajoseayalavargas@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/FabianJAyala",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/fabianjayala/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/fabianjayala",
  },
];

const listSocials = socials.map(social => {
  return (
    <a href={social.url} style={{margin: 10}}>
      <FontAwesomeIcon icon={social.icon} size="2x"/>
    </a>
  )
});

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isHidden = useScrollDirection()

  return (
    <Box
      position= "sticky"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transform={isHidden ? "translateY(-200px)" : "translateY(0)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul>
              {listSocials}
            </ul>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
