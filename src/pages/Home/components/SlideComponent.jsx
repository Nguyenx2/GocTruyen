import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Box, Button, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchData } from "../../../api/query/dataQuery";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SlideComponent = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery("homeData", fetchData);
  if (isLoading) {
    return (
      <HStack justify="center" align="center">
        <Text>Loading...</Text>
      </HStack>
    );
  }

  const handleClickComic = (slug) => {
    navigate(`truyen-tranh/${slug}`);
  };

  return (
    <Box my="4">
      <Flex
        w="full"
        align="center"
        justify="center"
        flexDirection={{ base: "column", md: "row" }}
        position="relative"
      >
        <Box position="relative" w="full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {data.data.items.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  borderRadius="lg"
                  w="full"
                  h={{
                    base: "15rem",
                    md: "20rem",
                  }}
                  objectFit="cover"
                  src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.5s",
                    cursor: "pointer",
                  }}
                  title={item.name}
                  onClick={() => handleClickComic(item.slug)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Button
          className="swiper-button-prev"
          position="absolute"
          top={{
            base: "auto",
            md: "50%",
          }}
          transform={{
            base: "none",
            md: "translateY(-50%)",
          }}
          left="0"
          opacity="0.6"
          zIndex="100"
        >
          <Icon as={GrPrevious}></Icon>
        </Button>

        <Button
          className="swiper-button-next"
          position="absolute"
          top={{
            base: "auto",
            md: "50%",
          }}
          transform={{
            base: "none",
            md: "translateY(-50%)",
          }}
          right="0"
          opacity="0.6"
          zIndex="100"
        >
          <Icon as={GrNext}></Icon>
        </Button>
      </Flex>
    </Box>
  );
};

export default SlideComponent;
