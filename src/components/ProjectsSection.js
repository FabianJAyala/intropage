import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";

const projects = [
  {
    title: "Little Lemon Website",
    description:
      "Front End Developer Project Capstone.",
    getImageSrc: () => require("../images/Little-Lemon-Page.jpg"),
    link: "https://github.com/FabianJAyala/project_capstone",
  },
  {
    title: "Adri Magic Planner Website",
    description:
      "First Project as a Front End Developer for a Disney and Universal Agency.",
    getImageSrc: () => require("../images/Adri-Magic-Planner.jpg"),
    link: "https://adrimagicplanner.com/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2a6165"
      isDarkBackground
      p={20}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
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
