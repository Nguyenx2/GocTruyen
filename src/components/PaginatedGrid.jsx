import {
  Box,
  Button,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import ComicCard from "./ComicCardComponent";

const PaginatedGrid = ({
  headerText,
  columnsConfig,
  initialData,
  currentPage,
}) => {
  const itemsPerPage = initialData.params.pagination.totalItemsPerPage;

  const totalPages = Math.ceil(
    initialData.params.pagination.totalItems / itemsPerPage
  );

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);

    let startPage = Math.max(1, currentPage - halfMaxPageNumbers);
    let endPage = Math.min(totalPages, currentPage + halfMaxPageNumbers);

    if (currentPage <= halfMaxPageNumbers) {
      endPage = Math.min(maxPageNumbers, totalPages);
    }

    if (currentPage + halfMaxPageNumbers >= totalPages) {
      startPage = Math.max(1, totalPages - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <Box>
      <VStack align="start" spacing="4">
        <Text textStyle="h5">{headerText}</Text>
        <HStack align="center" w="full">
          <Text as="h6" color="primary.DEFAULT" textTransform="uppercase">
            Tất cả
          </Text>
          <Box
            as="hr"
            flex="1"
            border="1px"
            borderColor="hsla(0, 0%, 100%, .12)"
          />
        </HStack>

        <SimpleGrid columns={columnsConfig} width="full" spacing="4">
          {initialData.items.map((item) => (
            <Link to={`/truyen-tranh/${item.slug}`} key={item.slug}>
              <ComicCard chapterLastest={item.chaptersLastest} {...item} />
            </Link>
          ))}
        </SimpleGrid>

        <Box
          w="full"
          as="hr"
          flex="1"
          border="1px"
          borderColor="hsla(0, 0%, 100%, .12)"
        />
        <HStack align="center" w="full" mt="4" justify="center">
          <Link to={`?page=${Number(currentPage) + 1}`}>
            <Button
              borderRadius="50%"
              width="10"
              height="10"
              bg="white"
              color="grey"
              disabled={currentPage === 1}
              _hover={{ bg: "hsla(0, 0%, 100%, .12)" }}
            >
              <Icon as={GrPrevious} />
            </Button>
          </Link>

          {getPageNumbers().map((pageNumber) => (
            <Link key={pageNumber} to={`?page=${Number(pageNumber)}`}>
              <Button
                borderRadius="50%"
                width="10"
                height="10"
                bg={pageNumber === currentPage ? "primary.DEFAULT" : "white"}
                color={pageNumber === currentPage ? "white" : "grey"}
                _hover={{ bg: "hsla(0, 0%, 100%, .12)" }}
              >
                {pageNumber}
              </Button>
            </Link>
          ))}

          <Link to={`?page=${Number(currentPage) + 1}`}>
            <Button
              borderRadius="50%"
              width="10"
              height="10"
              bg="white"
              color="grey"
              disabled={currentPage === totalPages}
              _hover={{ bg: "hsla(0, 0%, 100%, .12)" }}
            >
              <Icon as={GrNext} />
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PaginatedGrid;
