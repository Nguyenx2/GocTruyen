import { HStack, Icon, Tag, Text, VStack } from "@chakra-ui/react";
import SectionConponent from "./SectionComponent";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderComicComponent = ({ comic }) => {
  return (
    <SectionConponent>
      <VStack align="start">
        <Text fontSize="3xl" fontWeight="bold">
          {comic.name}
        </Text>
        <HStack wrap={"wrap"}>
          {comic.category.map((value) => (
            <Link key={value.id} to={`/the-loai/${value.slug}`}>
              <Tag bg="#57585D" color="grey.5">
                <Icon fontSize="sm" as={FaTag} />
                <Text ml="1" fontSize="xs" fontWeight="bold">
                  {value.name}
                </Text>
              </Tag>
            </Link>
          ))}
        </HStack>
        <Text
          fontSize="sm"
          color="grey.60"
          dangerouslySetInnerHTML={{ __html: comic.content }}
        />
      </VStack>
    </SectionConponent>
  );
};

export default HeaderComicComponent;
