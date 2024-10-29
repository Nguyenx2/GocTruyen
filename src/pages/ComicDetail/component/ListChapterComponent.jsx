import SectionComponent from "./SectionComponent";
import {
  Box,
  Button,
  chakra,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChapterComponent from "./ChapterComponent";
import { useState } from "react";

const ListChapterComponent = ({ slug, chapters, handleReadChapter }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectChapter, setSelectChapter] = useState("");

  const displayedChapters = showAll ? chapters : chapters.slice(0, 10);

  return (
    <SectionComponent>
      {chapters.length === 0 ? (
        <Text color="white">Sắp ra mắt</Text>
      ) : (
        <VStack>
          <HStack align="center" w="full" justify="space-between">
            <HStack
              w={{
                base: "50%",
                md: "75%",
              }}
            >
              <Text fontSize="xl" color="white">
                Danh sách
              </Text>
              <Box
                as="hr"
                flex="1"
                border="1px"
                borderColor="hsla(0, 0%, 100%, .12)"
              />
            </HStack>
            <HStack
              w={{
                base: "50%",
                md: "25%",
              }}
            >
              <Button
                textTransform="uppercase"
                fontSize="sm"
                bg={"bg.1variant"}
                color="grey.5"
                fontWeight="light"
                _hover={{
                  bg: "hsla(0, 0%, 100%, .12)",
                }}
                onClick={() =>
                  handleReadChapter(
                    chapters.find(
                      (chapter) => chapter.chapter_name == selectChapter
                    )
                  )
                }
              >
                Đi tới
              </Button>
              <Input
                placeholder="Chapter"
                w="50%"
                border={{
                  base: "1px",
                }}
                borderStyle="dashed"
                borderColor="grey.40"
                value={selectChapter}
                onChange={(e) => setSelectChapter(e.target.value)}
              />
            </HStack>
          </HStack>
          <SimpleGrid columns="2" w="full" spacing="4">
            {displayedChapters.map((chapter, index) => (
              <ChapterComponent
                key={index}
                slug={slug}
                chapter={chapter}
                handleReadChapter={() => handleReadChapter(chapter)}
              />
            ))}
          </SimpleGrid>
          <Button
            w="full"
            textTransform="uppercase"
            borderWidth="1px"
            borderStyle="dashed"
            borderColor="grey.40"
            bg="bg.3"
            color="grey.10"
            fontWeight="light"
            _hover={{
              bg: "hsla(0, 0%, 100%, .12)",
            }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ẩn bớt" : "Hiển thị tất cả"}
          </Button>
        </VStack>
      )}
    </SectionComponent>
  );
};

export default ListChapterComponent;
