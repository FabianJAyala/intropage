import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";

const projects = [
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
  {
    title: "Little Lemon: React Font-end Project Capstone",
    description:
      "Front End Developer Project Capstone for the Little Lemon Restaurant.",
    getImageSrc: () => require("../images/Little-Lemon-Front-End-Capstone.png"),
    link: "https://github.com/FabianJAyala/project_capstone",
  },
  {
    title: "Little Lemon: DRF Restaurant API",
    description:
      "API developed for the Little Lemon Restaurant using Django REST Framework.",
    getImageSrc: () => require("../images/Little-Lemon-DRF-Project.png"),
    link: "https://github.com/FabianJAyala/LittleLemonAPI",
  },
  {
    title: "Little Lemon: Django Back-end Project Capstone",
    description:
      "Back End Developer Project Capstone for the Little Lemon Restaurant.",
    getImageSrc: () => require("../images/Little-Lemon-Back-End-Capstone.png"),
    link: "https://github.com/FabianJAyala/LittleLemonBackEndCapstone",
  },
];

const ProjectsSection = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 2 });

  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={[10, 20]}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" size={["lg", "2xl"]}>
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
            maxDescriptionLines={2}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;