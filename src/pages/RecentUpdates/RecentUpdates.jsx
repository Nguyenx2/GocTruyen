import { HStack, Spinner } from "@chakra-ui/react";
import PaginatedGrid from "../../components/PaginatedGrid";
import { fetchRecentUpdates } from "../../api/query/dataQuery";
import { useQuery } from "react-query";
import ComicCard from "../../components/ComicCardComponent";
import usePageQuery from "../../hooks/usePageQuery";

const RecentUpdates = () => {
  const page = usePageQuery();

  const { data, error, isLoading } = useQuery(
    ["recentUpdates", page],
    fetchRecentUpdates
  );

  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Spinner />
      </HStack>
    );
  }

  return (
    <PaginatedGrid
      headerText="Cập nhật gần đây"
      columnsConfig={{ base: 2, md: 4, lg: 6 }}
      initialData={data.data}
      currentPage={page}
    />
  );
};

export default RecentUpdates;
