import React from "react";
import { Box, HStack, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { fetchComicWithCategory } from "../../api/query/dataQuery";
import { useQuery } from "react-query";
import PaginatedGrid from "../../components/PaginatedGrid";
import ComicCard from "../../components/ComicCardComponent";
import Layout from "../../components/Layout";
import usePageQuery from "../../hooks/usePageQuery";

const ComicResultWithCategory = () => {
  const { slug } = useParams();
  const page = usePageQuery();

  const {
    data: comicResult,
    error,
    isLoading,
  } = useQuery(["comicResult", slug, page], fetchComicWithCategory);

  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Spinner />
      </HStack>
    );
  }
  console.log(comicResult);

  const quantityResult = comicResult.data.params.pagination.totalItems;
  return (
    <Layout>
      <Box bg={"bg.2variant"} p={4} borderRadius="md">
        <PaginatedGrid
          headerText={`Có ${quantityResult} kết quả được tìm thấy`}
          columnsConfig={{ base: 2, md: 4, lg: 6 }}
          initialData={comicResult.data}
          currentPage={page}
        />
      </Box>
    </Layout>
  );
};

export default ComicResultWithCategory;
