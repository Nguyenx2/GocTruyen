import {
  Box,
  Checkbox,
  Collapse,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryPart = ({ headerText, categories, defaultIsOpen = true }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen });
  return (
    <Box
      w="full"
      as="fieldset"
      border="2px groove"
      borderColor="rgb(192, 192, 192)"
      borderRadius="lg"
    >
      <HStack
        gap="1"
        as="legend"
        px="2"
        fontWeight="bold"
        onClick={onToggle}
        cursor="pointer"
      >
        <Text>{headerText}</Text>
        <Icon
          as={FaCaretDown}
          transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
          transition="transform 0.2s"
        />
      </HStack>

      <Collapse in={isOpen} animateOpacity>
        <HStack p="3" gap="4" wrap="wrap">
          {categories.map((category) => (
            <Link key={category._id} to={`/the-loai/${category.slug}`}>
              <Text
                colorScheme="primary"
                size="md"
                borderWidth="1px"
                borderColor="primary.DEFAULT"
                p="2"
                _hover={{ bg: "primary.textLink", color: "white" }}
              >
                {category.name}
              </Text>
            </Link>
          ))}
        </HStack>
      </Collapse>
    </Box>
  );
};

export default CategoryPart;
