import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { http } from "../../infra/http";
import { useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import caralho from "../../assets/daily-post-stock.png";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  InputGroup,
  InputLeftElement,
  Image,
  Flex,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";
export const Route = createFileRoute("/auth/login")({
  component: () => <LoginPage />,
});

function LoginPage() {
  
  const { accessToken, updateAccessToken } = useAuthStore();
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
      const { data } = await http.post("/auth/signin", {
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
            <Text>Informe seu E-mail para Login</Text>
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
              Entrar
            </Button>
            <HStack justify="center" width="full">
              <Text>ou</Text>
            </HStack>
            <Button colorScheme="blue" variant="outline" width="full"  onClick={async () => {
              
                navigate({ to: "/auth/register" });
              }} >
              Registrar
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
