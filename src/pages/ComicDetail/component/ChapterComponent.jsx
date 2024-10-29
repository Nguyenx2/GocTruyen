import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { getChaptersFromLocalStorage } from "../../../utils/localStorage";

const ChapterComponent = ({ slug, chapter, handleReadChapter }) => {
  const chaptersReaded = getChaptersFromLocalStorage(slug);

  return (
    <HStack
      key={chapter.id}
      p={2}
      bg="bg.4"
      _hover={{
        bg: "readIcon",
        cursor: "pointer",
      }}
      onClick={handleReadChapter}
    >
      <Center w="3.5rem" h="full" bg="primary.darken" borderRadius="xl">
        <Icon as={FaEye} />
      </Center>
      <Text
        as="h6"
        color={
          chaptersReaded.includes(chapter.chapter_name) ? "grey.80" : "white"
        }
      >
        Chapter {chapter.chapter_name}
      </Text>
    </HStack>
  );
};

export default ChapterComponent;
