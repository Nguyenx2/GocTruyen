import { Box, Container, Stack, useDisclosure } from "@chakra-ui/react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ScrollToTop from "./ScrollToTop";
import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Stack>
      <Box>
        <HeaderComponent onOpen={onOpen} />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <ScrollToTop />
      <Container
        overflowY="auto"
        maxW={{
          base: "100%",
          lg: "calc(100vw - 20rem)",
        }}
      >
        {children}
      </Container>
      <Box>
        <FooterComponent />
      </Box>
    </Stack>
  );
};

export default Layout;
