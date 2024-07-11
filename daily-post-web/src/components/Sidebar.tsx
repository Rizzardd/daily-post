import { Box, VStack, Avatar, Text, Icon, Link, Flex } from "@chakra-ui/react";
import { FiHome, FiCalendar, FiList, FiPlus } from "react-icons/fi";

export default function Sidebar() {
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
        <Avatar size="sm" name="Luna Salles" src="path-to-avatar" />
        <Text ml="2">Luna Salles</Text>
      </Flex>
    </Box>
  );
}
