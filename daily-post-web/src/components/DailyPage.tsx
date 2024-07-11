import { Box, Text, Textarea, Button, VStack, HStack, Spacer, Icon } from '@chakra-ui/react';
import { FiSquare, FiCircle, FiTriangle, FiPlus } from 'react-icons/fi';

export default function DailyPage() {
    return (
        <Box p="4">
        <Text fontSize="xl" fontWeight="bold">Calendário</Text>
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
              <Textarea placeholder="Digite aqui sua Daily!" mt="2" bg="gray.800" color="white" border="none" />
            </Box>
            <Box bg="gray.700" p="4" borderRadius="md" w="full">
              <HStack spacing="2">
                <Icon as={FiTriangle} />
                <Text>O que irei fazer hoje?</Text>
              </HStack>
              <Textarea placeholder="Digite aqui sua Daily!" mt="2" bg="gray.800" color="white" border="none" />
            </Box>
            <Box bg="gray.700" p="4" borderRadius="md" w="full">
              <HStack spacing="2">
                <Icon as={FiCircle} />
                <Text>Impedimentos/ajuda?</Text>
              </HStack>
              <Textarea placeholder="Digite aqui sua Daily!" mt="2" bg="gray.800" color="white" border="none" />
            </Box>
          </VStack>
          <Button colorScheme="teal" mt="4">Postar</Button>
        </Box>
      </Box>
    )
}