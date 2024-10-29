import { Box, HStack, Spinner } from "@chakra-ui/react";
import PaginatedGrid from "../../components/PaginatedGrid";
import { fetchFinishedComic } from "../../api/query/dataQuery";
import { useQuery } from "react-query";
import ComicCard from "../../components/ComicCardComponent";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import usePageQuery from "../../hooks/usePageQuery";

const FinishedComic = () => {
  const navigate = useNavigate();
  const page = usePageQuery();

  const {
    data: finishedComic,
    error,
    isLoading,
  } = useQuery(["finishedComic", page], () => fetchFinishedComic);
  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Spinner />
      </HStack>
    );
  }

  return (
    <Layout>
      <Box p={4} bg={"bg.2variant"} borderRadius="md">
        <PaginatedGrid
          headerText={`Tất cả`}
          columnsConfig={{ base: 2, md: 4, lg: 6 }}
          initialData={finishedComic.data}
          currentPage={page}
        />
      </Box>
    </Layout>
  );
};

export default FinishedComic;
