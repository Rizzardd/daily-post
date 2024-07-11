import {
  Box,
  VStack,
  Avatar,
  Text,
  Icon,
  Link,
  Flex,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { FiHome, FiCalendar, FiList, FiPlus } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { useAuthStore } from "../stores/auth.store";
import { useQuery } from "@tanstack/react-query";
import { http } from "../infra/http";

export default function Sidebar() {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await http.get("user/me");
      return data;
    },
  });
  const { clearAccessToken } = useAuthStore();

  return (
    <Box
      bg="gray.900"
      color="white"
      w="250px"
      h="100vh"
      p="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb="8">
          Daily Post
        </Text>
        <VStack align="start" spacing="4">
          <Link
            onClick={() => navigate({ to: "/" })}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Icon as={FiHome} mr="2" /> Dashboard
          </Link>
          <Link
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Icon as={FiCalendar} mr="2" /> Calendário
          </Link>
          <Link
            display="flex"
            alignItems="center"
            onClick={() => navigate({ to: "/daily" })}
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Icon as={FiList} mr="2" /> Dailies
          </Link>
        </VStack>
        <Text mt="8" mb="4" fontSize="lg" fontWeight="bold">
          Equipes de Projetos
        </Text>
        <VStack align="start" spacing="4">
          <Link
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Icon as={FiPlus} mr="2" /> Projetos
          </Link>
          <Link
            pl="6"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            <Icon as={FiList} mr="2" /> Projeto Teste
          </Link>
        </VStack>
      </Box>
      <Flex align="center" mt="auto">
        <Avatar size="sm" name={data?.name ?? ""} src="path-to-avatar" />
        <Text flex={1} ml="2">
          {isLoading ? "..." : data?.name}
        </Text>
        <Tooltip label="Sair">
          <IconButton
            onClick={() => {
              clearAccessToken();
              navigate({ to: "/auth/login" });
            }}
            variant="ghost"
            colorScheme="white"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<IoIosLogOut />}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
