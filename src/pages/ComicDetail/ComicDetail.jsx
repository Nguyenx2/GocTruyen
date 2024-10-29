import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  useToast,
  VStack,
} from "@chakra-ui/react";
import HeaderMangaComponent from "./component/HeaderComicComponent";
import InforMangaComponent from "./component/InforComicComponent";
import ListChapterComponent from "./component/ListChapterComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchComicDetail } from "../../api/query/dataQuery";
import { saveChapterToLocalStorage } from "../../utils/localStorage";
import Layout from "../../components/Layout";

const ComicDetail = () => {
  const VITE_IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const toast = useToast();
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery(
    ["comicDetail", slug],
    fetchComicDetail
  );

  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Spinner />
      </HStack>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
  const comic = data.data.item;

  let chapters;
  if (!comic.chapters || !comic.chapters[0] || !comic.chapters[0].server_data) {
    chapters = [];
  } else {
    chapters = comic.chapters[0].server_data;
  }

  const handleReadChapter = (chapter) => {
    if (chapters.length === 0 || chapter === undefined) {
      toast({
        position: "top",
        title: "Không có chương để đọc",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      navigate(`chapter/${chapter.chapter_name}`, {
        state: {
          chapterApiUrl: chapter.chapter_api_data,
          comicName: comic.name,
          totalChapters: chapters.length,
          allChapters: chapters,
        },
      });
      saveChapterToLocalStorage(slug, chapter.chapter_name);
    }
  };

  return (
    <Layout>
      <VStack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing="4"
        >
          <Box gridColumn="span 1">
            <VStack gap="4">
              <Box height="20rem">
                <Image
                  src={`${VITE_IMAGE_URL}/${comic.thumb_url}`}
                  alt="Description"
                  h="full"
                  objectFit="contain"
                  borderRadius="lg"
                />
              </Box>
              <Button w="full" onClick={() => handleReadChapter(chapters[0])}>
                Đọc từ đầu
              </Button>
            </VStack>
          </Box>
          <Box gridColumn="span 2">
            <VStack>
              <HeaderMangaComponent comic={comic} />
              <InforMangaComponent comic={comic} />
              <ListChapterComponent
                slug={slug}
                chapters={chapters}
                handleReadChapter={handleReadChapter}
              />
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default ComicDetail;
