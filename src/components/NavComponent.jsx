import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      text: "Trang chủ",
      link: "/",
    },
    {
      text: "Danh sách",
      link: "/the-loai",
    },
    {
      text: "Đã hoàn thành",
      link: "/da-hoan-thanh",
    },
    {
      text: "Liên hệ",
      link: "/lien-he",
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/tim-kiem?keyword=${searchValue}`);
    }
  };
  return (
    <HStack
      justify={{
        base: "space-between",
      }}
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <HStack
        gap={8}
        flexDir={{
          base: "column",
          md: "row",
        }}
        w="full"
      >
        {navLinks.map((nav) => (
          <Box
            key={nav.link}
            w={{
              base: "full",
              md: "auto",
            }}
          >
            <Link to={nav.link}>
              <Text
                key={nav.link}
                color={isActiveLink(nav.link) ? "#ffffff" : "#ffffffb3"}
                borderBottom={
                  isActiveLink(nav.link) ? "2px solid #ffffff" : "none"
                }
                textTransform="uppercase"
                fontSize="sm"
                _hover={{ bg: "#28292E", cursor: "pointer" }}
                p={2}
                borderRadius={3}
                w="full"
              >
                {nav.text}
              </Text>
            </Link>
          </Box>
        ))}
      </HStack>
      <HStack>
        <Button
          onClick={handleSearch}
          w={{
            base: "none",
            md: "auto",
          }}
        >
          Tìm kiếm
        </Button>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} fontSize="2xl" />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>
      </HStack>
    </HStack>
  );
};

export default NavComponent;
