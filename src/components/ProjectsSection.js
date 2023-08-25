import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";

const projects = [
  {
    title: "Little Lemon Website",
    description:
      "Front End Developer Project Capstone, for the Little Lemon Restaurant.",
    getImageSrc: () => require("../images/Little-Lemon-Page.jpg"),
    link: "https://github.com/FabianJAyala/project_capstone",
  },
  {
    title: "Adri Magic Planner Website",
    description:
      "First Project as a Front End Developer, website developed with React for a Disney and Universal Agency.",
    getImageSrc: () => require("../images/Adri-Magic-Planner.jpg"),
    link: "https://adrimagicplanner.com/",
  },
  {
    title: "UNeedWeDo Website",
    description:
      "Fully implemented multi-language ecommerce site on WordPress, made for a digital solutions company.",
    getImageSrc: () => require("../images/UNeedWeDo-Website.jpg"),
    link: "https://uneedwedo.com/",
  },
  {
    title: "Caché Logística Website",
    description:
      "Website made for a logistics company in La Paz - Bolivia.",
    getImageSrc: () => require("../images/Cache-Logistica-Website.jpg"),
    link: "https://cache.uneedwedo.com/cache-servicios-logisticos/",
  },
];

const ProjectsSection = () => {
  const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column on mobile, 2 columns on larger screens

  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={20}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" size="xl">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${columns}, minmax(0, 1fr))`}
        gridGap={8}
      >
        {projects.map((project) => (
          <CardTemplate
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;