import { Box, Button, HStack, Icon, Select } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { getChaptersFromLocalStorage } from "../../../utils/localStorage";

const ChapterNavbarComponent = ({
  slug,
  chapterNumber,
  totalChapters,
  onChapterChange,
}) => {
  const navigate = useNavigate();
  const readedChapters = getChaptersFromLocalStorage(slug);

  return (
    <Box
      w="100vw"
      bg={"bg.1variant"}
      position="fixed"
      bottom="0"
      zIndex="1000"
      transition="top 0.3s ease, bottom 0.3s ease"
      left="0"
    >
      <HStack justify="center" h="4rem">
        <Icon
          as={FaHome}
          ml="1"
          fontSize="xl"
          _hover={{
            cursor: "pointer",
            color: "primary.textLink",
          }}
          onClick={() => navigate("/")}
        />
        <Button onClick={() => onChapterChange(Number(chapterNumber) - 1)}>
          <Icon as={GrPrevious} />
        </Button>
        <Select
          width="10rem"
          value={chapterNumber}
          onChange={(e) => onChapterChange(Number(e.target.value))}
        >
          {Array.from({ length: totalChapters }, (_, i) => {
            const isRead = readedChapters.includes((i + 1).toString());
            return (
              <option
                key={i}
                value={i + 1}
                style={{
                  color: isRead ? "gray" : "black",
                }}
              >
                Chapter {i + 1}
              </option>
            );
          })}
        </Select>
        <Button onClick={() => onChapterChange(Number(chapterNumber) + 1)}>
          <Icon as={GrNext} />
        </Button>
      </HStack>
    </Box>
  );
};

export default ChapterNavbarComponent;
