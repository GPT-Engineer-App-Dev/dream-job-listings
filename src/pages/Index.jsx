import { useEffect, useState } from "react";
import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantResume, setApplicantResume] = useState("");

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobs);
  }, []);

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const newApplication = { jobId: selectedJob.title, applicantName, applicantEmail, applicantResume };
    const existingApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    localStorage.setItem("jobApplications", JSON.stringify([...existingApplications, newApplication]));
    setShowApplicationForm(false);
    setApplicantName("");
    setApplicantEmail("");
    setApplicantResume("");
  };

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
                <Button colorScheme="teal" onClick={() => handleApplyNow(job)}>Apply Now</Button>
              </CardFooter>
              {showApplicationForm && selectedJob === job && (
                <Box as="form" onSubmit={handleApplicationSubmit} mt={4} p={4} borderWidth="1px" borderRadius="lg">
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
                  </FormControl>
                  <FormControl id="email" isRequired mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
                  </FormControl>
                  <FormControl id="resume" isRequired mt={4}>
                    <FormLabel>Resume</FormLabel>
                    <Textarea value={applicantResume} onChange={(e) => setApplicantResume(e.target.value)} />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" size="lg" mt={4}>Submit Application</Button>
                </Box>
              )}
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;