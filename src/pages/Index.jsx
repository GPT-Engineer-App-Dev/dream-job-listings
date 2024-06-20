import { useEffect, useState } from "react";
import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobs);
  }, []);

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} w="full">
        <Heading as="h1" size="2xl" mb={4}>Job Listings</Heading>
        <Button as={Link} to="/post-job" colorScheme="teal" size="lg" mb={8}>Post a Job</Button>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
          {jobListings.map((job, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
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