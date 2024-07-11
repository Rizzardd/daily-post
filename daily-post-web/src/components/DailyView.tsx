import {
  Box,
  Text,
  Textarea,
  Button,
  VStack,
  HStack,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { FiSquare, FiCircle, FiTriangle, FiPlus } from "react-icons/fi";
import { http } from "../infra/http";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";

export default function DailyView() {
  const navigate = useNavigate();
  const [doneText, setDoneText] = useState("");
  const [todoText, setTodoText] = useState("");
  const [issuesText, setIssuesText] = useState("");
  const toast = useToast();

  const { isPending, mutate } = useMutation({
    mutationFn: async ({ done, todo, issues }: any) => {
      const { data } = await http.post("/daily", {
        done,
        todo,
        issues,
      });

      return data;
    },
    onSuccess() {
      toast({
        title: "Daily Postada!",
        description: "Sua daily foi postada",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setDoneText("");
      setTodoText("");
      setIssuesText("");
      navigate({
        to: "/",
      });
    },
    onError() {
      toast({
        title: "Ocorreu um erro!",
        description: "Sua daily não foi postada, tente novamente",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
  return (
    <Box p="4" color="white">
      <Text fontSize="xl" fontWeight="bold">
        Calendário
      </Text>
      <HStack spacing="4" mt="4">
        <Text fontSize="md">Dailies</Text>
        <Spacer />
        <Button leftIcon={<FiPlus />} colorScheme="teal" variant="outline">
          Add
        </Button>
      </HStack>
      <Box mt="4">
        <Text mb="2">Siga as instruções para postar a sua Daily!</Text>
        <VStack spacing="4" align="start">
          <Box bg="gray.700" p="4" borderRadius="md" w="full">
            <HStack spacing="2">
              <Icon as={FiSquare} />
              <Text>O que fiz ontem?</Text>
            </HStack>
            <Textarea
              value={doneText}
              onChange={(e) => setDoneText(e.target.value)}
              placeholder="Digite aqui sua Daily!"
              mt="2"
              bg="gray.800"
              color="white"
              border="none"
            />
          </Box>
          <Box bg="gray.700" p="4" borderRadius="md" w="full">
            <HStack spacing="2">
              <Icon as={FiTriangle} />
              <Text>O que irei fazer hoje?</Text>
            </HStack>
            <Textarea
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Digite aqui sua Daily!"
              mt="2"
              bg="gray.800"
              color="white"
              border="none"
            />
          </Box>
          <Box bg="gray.700" p="4" borderRadius="md" w="full">
            <HStack spacing="2">
              <Icon as={FiCircle} />
              <Text>Impedimentos/ajuda?</Text>
            </HStack>
            <Textarea
              value={issuesText}
              onChange={(e) => setIssuesText(e.target.value)}
              placeholder="Digite aqui sua Daily!"
              mt="2"
              bg="gray.800"
              color="white"
              border="none"
            />
          </Box>
        </VStack>
        <Button
          onClick={() => {
            if (!doneText) {
              toast({
                title: "Campo Obrigatório!",
                description: "O campo 'O que fiz ontem?' é obrigatório",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
              return;
            }

            mutate({
              done: doneText,
              todo: todoText,
              issues: issuesText,
            });
          }}
          loadingText="Salvando..."
          isLoading={isPending}
          colorScheme="teal"
          mt="4"
        >
          Postar
        </Button>
      </Box>
    </Box>
  );
}
