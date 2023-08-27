import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
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

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isHidden = useScrollDirection();

  return (
    <Box
      position="sticky"
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
      <Box
        color="white"
        maxWidth="1280px"
        margin="0 auto"
        px={4}
        py={[2, 4]}
      >
        <HStack
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  style={{ margin: "0 1px" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2xl" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={4}>
              <a
                href="#projects"
                onClick={handleClick("projects")}
                style={{ textDecoration: "none" }}
              >
                <Text color="white">Projects</Text>
              </a>
              <a
                href="#contact-me"
                onClick={handleClick("contactme")}
                style={{ textDecoration: "none" }}
              >
                <Text color="white">Contact Me</Text>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
