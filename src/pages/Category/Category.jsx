import { Box, Container, HStack, Spinner } from "@chakra-ui/react";
import CategoryPart from "./component/CategoryPart";
import { useQuery } from "react-query";
import { fetchCategories } from "../../api/query/dataQuery";
import Layout from "../../components/Layout";

const Category = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery("categories", fetchCategories);
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
        <CategoryPart
          headerText="Trạng thái"
          categories={categories.data.items}
        ></CategoryPart>
      </Box>
    </Layout>
  );
};

export default Category;
