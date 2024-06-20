import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    description: "We are looking for a skilled frontend developer to join our team.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovative Apps LLC",
    location: "San Francisco, CA",
    description: "Seeking an experienced backend developer to work on our cutting-edge projects.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebWorks",
    location: "Remote",
    description: "Join our remote team as a full stack developer.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} w="full">
        <Heading as="h1" size="2xl" mb={4}>Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading as="h2" size="md">{job.title}</Heading>
                <Text fontSize="sm" color="gray.500">{job.company} - {job.location}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;