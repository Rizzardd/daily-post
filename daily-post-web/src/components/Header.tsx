import {
  Flex,
  AvatarGroup,
  Avatar,
  IconButton,
  Heading,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FiSearch, FiUserPlus } from "react-icons/fi";



export default function Header() {
  return (
    <Flex bg="gray.800" color="white" align="center" p="4" boxShadow="md" height="7.5vw">
      <Heading size="md">Projeto Teste</Heading>
      <Spacer />
      <InputGroup maxW="200px" mr="4">
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search"
          variant="filled"
          bg="gray.700"
          border="none"
          _placeholder={{ color: "gray.400" }}
        />
      </InputGroup>
      <AvatarGroup size="md" max={3}>
        <Avatar name="User 1" src="path-to-avatar1" />
        <Avatar name="User 2" src="path-to-avatar2" />
        <Avatar name="User 3" src="path-to-avatar3" />
      </AvatarGroup>
      <IconButton ml="4" icon={<FiUserPlus />} aria-label="Add User" />
    </Flex>
  );
}
