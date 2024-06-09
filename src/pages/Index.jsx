import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" color="teal.500">Welcome to Your New React App</Text>
        <Text>This is an empty React application ready for your content.</Text>
      </VStack>
    </Container>
  );
};

export default Index;