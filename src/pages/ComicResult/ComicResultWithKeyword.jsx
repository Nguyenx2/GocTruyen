import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import PaginatedGrid from "../../components/PaginatedGrid";
import Layout from "../../components/Layout";
import usePageQuery from "../../hooks/usePageQuery";
import { fetchComicWithKeyword } from "../../api/query/dataQuery";

const ComicResultWithKeyword = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const page = usePageQuery();

  const {
    data: comicResultWithKeyword,
    error,
    isLoading,
  } = useQuery(
    ["comicResultWithKeyword", keyword, page],
    fetchComicWithKeyword
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const titlePage = comicResultWithKeyword.data.titlePage;
  const quantityResult =
    comicResultWithKeyword.data.params.pagination.totalItems;

  return (
    <Layout>
      <Box bg="bg.2variant" borderRadius="md" p={4}>
        <PaginatedGrid
          headerText={`${titlePage}. Có ${quantityResult} kết quả được tìm thấy`}
          columnsConfig={{ base: 2, md: 4, lg: 6 }}
          initialData={comicResultWithKeyword.data}
          currentPage={page}
        />
      </Box>
    </Layout>
  );
};

export default ComicResultWithKeyword;
