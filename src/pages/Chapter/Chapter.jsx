import {
  Box,
  HStack,
  Image,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import ChapterNavbarComponent from "./component/ChapterNavbarComponent";
import { saveChapterToLocalStorage } from "../../utils/localStorage";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import SideDrawer from "../../components/SideDrawer";
import ScrollToTop from "../../components/ScrollToTop";

const Chapter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { slug, chapterNumber } = useParams();

  const { chapterApiUrl, comicName, totalChapters, allChapters } =
    location.state || {};

  const fetchChapter = async (chapterApiUrl) => {
    const response = await axios.get(chapterApiUrl);
    if (response.data.status === "success") {
      return response.data.data;
    }
    throw new Error("Failed to fetch chapter data");
  };

  const {
    data: chapterData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chapter", chapterApiUrl],
    queryFn: () => fetchChapter(chapterApiUrl),
  });

  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Spinner />
      </HStack>
    );
  }

  if (error) {
    return (
      <Box>
        <Text>Error</Text>
      </Box>
    );
  }

  const handleChapterChange = (newChapter) => {
    if (newChapter < 1 || newChapter > totalChapters) return;
    const newChapterData = allChapters.find(
      (chapter) => chapter.chapter_name == newChapter
    );
    if (newChapterData) {
      navigate(`/truyen-tranh/${slug}/chapter/${newChapter}`, {
        state: {
          chapterApiUrl: newChapterData.chapter_api_data,
          comicName,
          totalChapters,
          allChapters,
        },
        replace: true,
      });
      saveChapterToLocalStorage(slug, newChapter.toString());
    }
  };

  const constructImageUrl = (image) => {
    if (!chapterData) return "";
    return `${chapterData.domain_cdn}/${chapterData.item.chapter_path}/${image.image_file}`;
  };

  return (
    <Box>
      <HeaderComponent onOpen={onOpen} />
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <ScrollToTop />
      <VStack gap="4" mt="4">
        <VStack>
          <Link to={`/truyen-tranh/${slug}`}>
            <Text textStyle="h4">{comicName}</Text>
          </Link>
          <Text textStyle="h5">Chapter {chapterNumber}</Text>
        </VStack>
        <VStack>
          {chapterData.item.chapter_image.map((image, index) => (
            <Image key={index} src={constructImageUrl(image)} loading="lazy" />
          ))}
        </VStack>
      </VStack>

      <ChapterNavbarComponent
        slug={slug}
        chapterNumber={chapterNumber}
        totalChapters={totalChapters}
        onChapterChange={handleChapterChange}
      />
      <FooterComponent />
    </Box>
  );
};

export default Chapter;
