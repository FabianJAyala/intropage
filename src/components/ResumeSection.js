import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Card, CardHeader, Flex, IconButton, CardBody, Text, CardFooter, Button, Avatar, Box } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from "../images/Fabian-Ayala-Profile.png"

const jobs = [
  {
    label: "February, 2017 to September, 2019",
    company: "Gingies (Entrepreneurship)",
    title: "Owner",
    description: "Established a business based on my degree project: 'Production of Hard Candies with Antibacterial Properties, made with Ginger and Honey.' FDA-approved. The candies were sold effectively at fairs, kiosks, and pharmacies. Managed the marketing strategies.",
  },
  {
    label: "October, 2019 to March, 2020",
    company: "ZTE Bolivia (Telecommunications)",
    title: "Warehouse Manager",
    description: "Proficiently managed a 1000m2 warehouse, optimizing storage efficiency, coordinating logistics, managing the WMS, and supervising a team of 5. Additionally, prepared all documentationfor an International ZTE Company audit, and successfully led a 15-member team during the warehouse relocation process.",
  },
  {
    label: "April, 2020 to May, 2022",
    company: "UNeedWeDo - Digital Solutions (Entrepreneurship)",
    title: "Co-Owner",
    description: "Developed a multi-lingual website, integrating WooCommerce and diverse payment channels. Optimized the site with SEO. Managed advertising campaigns on Google Ads. Additionally, handled social media accounts, creating engaging posts and reels, while also writing and publishing blog articles.",
  },
  {
    label: "June, 2022 to April, 2023",
    company: "Caché - Last Mile Logistics (Entrepreneurship)",
    title: "Co-Owner",
    description: "Established a picking and delivery business to make the ecommerce viable in La Paz. Developed process diagrams from order request to delivery. Utilized VRP technology for deliveryroutes. Integrated CRM into the prospect and sales process. Also, developed a SEO-optimized website and managed the digital marketing campaigns.",
  },
];

function DataTabs({ data }) {
  return (
    <Tabs variant='soft-rounded'>
      <TabList>
        {data.map((tab, index) => (
          <Tab
            key={index}
            sx={{
              color: 'white',
              textDecor: 'none',
              _selected: { color: 'white', bg: '#429699' }
            }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel p={8} key={index} display='flex' justifyContent='center' alignItems='center'>
            <Card maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name='Fabian Ayala' src={profile} />
                  <Box>
                    <Heading size='sm'>Fabian Ayala</Heading>
                    <Text>{tab.title}</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<BsThreeDotsVertical />}
                  />
                </Flex>
                </CardHeader>
                <CardBody>
                  <Heading size='sm' marginBottom={"3"}>{tab.company}</Heading>
                  <Text>
                    {tab.description}
                  </Text>
                </CardBody>
                <CardFooter
                  justify='space-between'
                  flexWrap='wrap'
                  sx={{
                    '& > button': {
                      minW: '136px',
                    },
                  }}
                >
                  <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                  </Button>
                  <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                  </Button>
                  <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                  </Button>
                </CardFooter>
              </Card>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

const ResumeSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2a6165"
      isDarkBackground
      p={20}
      alignItems="center"
      spacing={8}
    >
        <Heading as="h1" id="resume-section">
            Professional Experience
        </Heading>
        <DataTabs data={jobs} />
    </FullScreenSection>
  );
};

export default ResumeSection;
