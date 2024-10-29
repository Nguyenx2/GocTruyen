import { Button, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="3rem"
          right={{
            base: "0.1rem",
            md: "2rem",
            lg: "4rem",
          }}
          w={{
            base: "2.5rem",
          }}
          h={{
            base: "2.5rem",
          }}
          bg="primary.DEFAULT"
          color="white"
          borderRadius="full"
          opacity="0.5"
          _hover={{ bg: "primary.darken" }}
          zIndex="99999"
        >
          <Icon as={FaArrowUp} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
