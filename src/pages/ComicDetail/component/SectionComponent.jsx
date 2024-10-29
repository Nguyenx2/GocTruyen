import { Container } from "@chakra-ui/react";

const SectionComponent = ({ children }) => {
  return (
    <Container bg="bg.1variant" borderRadius="lg" maxW="full" p="4">
      {children}
    </Container>
  );
};

export default SectionComponent;
