import {
  Box,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import SectionComponent from "./SectionComponent";

const InforMangaComponent = ({ comic }) => {
  return (
    <SectionComponent>
      <VStack align="start" fontSize="sm">
        <HStack align="center" w="full">
          <Text fontSize="xl" color="white">
            Thông tin
          </Text>
          <Box
            as="hr"
            flex="1"
            border="1px"
            borderColor="hsla(0, 0%, 100%, .12)"
          />
        </HStack>
        <HStack>
          <Text textTransform="uppercase" color="grey.20">
            Tên khác:
          </Text>

          {comic.origin_name[0] === "" ? (
            <Text color="#18e390">"Updating"</Text>
          ) : (
            <UnorderedList>
              {comic.origin_name.map((name, index) => (
                <ListItem key={index}>{name}</ListItem>
              ))}
            </UnorderedList>
          )}
        </HStack>
        <HStack>
          <Text textTransform="uppercase" color="grey.20">
            Tác giả:
          </Text>
          <Text color="#18e390">{comic.author}</Text>
        </HStack>
        <HStack>
          <Text textTransform="uppercase" color="grey.20">
            Trạng thái:
          </Text>
          <Text color="#18e390">
            {comic.status === "ongoing" ? "Đang tiến hành" : "Đã hoàn thành"}
          </Text>
        </HStack>
      </VStack>
    </SectionComponent>
  );
};

export default InforMangaComponent;
