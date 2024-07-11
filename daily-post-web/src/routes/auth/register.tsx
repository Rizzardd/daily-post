import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import caralho from "../../assets/daily-post-stock.png";
import { useAuthStore } from "../../stores/auth.store";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FiUser } from "react-icons/fi";
import { http } from "../../infra/http";

export const Route = createFileRoute("/auth/register")({
  component: () => <RegisterPage />,
});

function RegisterPage() {
  const { accessToken, updateAccessToken } = useAuthStore();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { data } = await http.post("/auth/signup", {
        name: nome,
        email: email,
        password: password,
      });

      return data.access_token as string;
    },
  });
  const navigate = useNavigate();
  return (
    <Center minH="100vh" bg="gray.800">
      <Flex
        bg="gray.700"
        borderRadius="lg"
        boxShadow="lg"
        width={{ base: "90%", md: "80%", lg: "60%" }}
        maxW="700px"
        overflow="hidden"
      >
        <Box
          bg="gray.700"
          p={8}
          flex={1}
          borderRadius="lg"
          boxShadow="lg"
          width="md"
          color="white"
        >
          <VStack spacing={4} align="stretch">
            <Text fontSize="2xl" fontWeight="bold">
              Bem Vindo ao{" "}
              <Text as="span" color="blue.500">
                Daily
              </Text>
              <Text as="span" color="white" ml={1}>
                Post!
              </Text>
            </Text>
            <FormControl id="nome">
              <FormLabel>Nome</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiUser color="gray.300" />
                </InputLeftElement>
                <Input
                  type="name"
                  value={nome}
                  onChange={(evt) => setNome(evt.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="dailypost@gmail.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="blue"
              width="full"
              isLoading={isPending}
              loadingText="Entrando..."
              onClick={async () => {
                const result = await mutateAsync({ email, password });
                updateAccessToken(result);
                navigate({ to: "/" });
              }}
            >
              Registrar
            </Button>
            <HStack justify="center" width="full">
              <Text>ou</Text>
            </HStack>
            <Button colorScheme="blue" variant="outline" width="full"  onClick={async () => {
              
              navigate({ to: "/auth/login" });
            }} >
           Entrar
          </Button>
          </VStack>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          bg="backgroundLoginImg"
          borderTopRightRadius="lg"
          borderBottomRightRadius="lg"
          width={262}
        >
          <Box textAlign="center">
            <Image src={caralho} width={80} mt={35} alt="stock photo" />
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
