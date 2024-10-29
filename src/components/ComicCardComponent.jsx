import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { GiBookmarklet } from "react-icons/gi";
import { dateToTimeAgo } from "../utils/date";

const shineEffect = keyframes`
  0% {
  transform: skew(-25deg) translateX(-100%);
  }
  100% {
  transform: skew(-25deg) translateX(300%);
  }
`;

const ComicCard = ({ name, updatedAt, chaptersLatest, thumb_url }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <Box _hover={{ cursor: "pointer" }}>
      <VStack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h={{
          base: "20rem",
          md: "26rem",
        }}
      >
        <Box
          flex="1"
          position="relative"
          _hover={{
            "& > div": {
              animation: `${shineEffect} 1s ease-in-out forwards`,
            },
          }}
          w="full"
        >
          <Image
            src={`${imageUrl}/${thumb_url}`}
            objectFit="cover"
            loading="lazy"
            w="full"
            h={{
              base: "200px",
              md: "280px",
            }}
          />
          <Box
            position="absolute"
            top="0"
            left="-100%"
            width="100%"
            height="100%"
            background="linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)"
            transform="skew(-20deg) translateX(-100%)"
          />
        </Box>

        <Box flex="2" p={2} w="full">
          <VStack align="start" h="full">
            <Box flex="1">
              <Text
                fontWeight="bold"
                fontSize="sm"
                noOfLines={2}
                ellipsis="true"
                _hover={{ color: "primary.DEFAULT" }}
              >
                {name}
              </Text>
            </Box>

            <Box flex="1">
              <HStack>
                <Box
                  width="5"
                  height="5"
                  borderRadius="50%"
                  bg="primary.DEFAULT"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={GiBookmarklet} w={3} h={3} />
                </Box>

                <VStack align="start" spacing="0">
                  <Text fontWeight="sm" fontSize="sm">
                    {chaptersLatest != null
                      ? `Chapter ${chaptersLatest[0].chapter_name}`
                      : "Sắp ra mắt"}
                  </Text>
                  <Text fontSize="xs" color="#ffffff80">
                    {dateToTimeAgo(updatedAt)}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ComicCard;
