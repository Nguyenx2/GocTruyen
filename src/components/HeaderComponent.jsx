import { Box, Container, HStack, IconButton, Img } from "@chakra-ui/react";
import NavComponent from "./NavComponent";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HeaderComponent = ({ onOpen }) => {
  return (
    <Container bg="bg.1" maxW="full">
      <HStack
        h="16"
        px={{
          base: "none",
          md: "10rem",
        }}
        gap="8"
      >
        <Box w="100px" flexShrink="0">
          <Link to="/">
            <Img src="/logo.png" alt="logo" />
          </Link>
        </Box>
        <Box
          flex="1"
          display={{
            base: "none",
            md: "block",
          }}
        >
          <NavComponent />
        </Box>
        <IconButton
          aria-label="Open menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<GiHamburgerMenu />}
          ml="auto"
        />
      </HStack>
    </Container>
  );
};

export default HeaderComponent;
