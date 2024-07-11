import { createFileRoute } from "@tanstack/react-router";
import { Box, Stack } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export const Route = createFileRoute("/_protected/_protected")({
  component: () => (
    <div>
      <Stack direction={["column", "row"]} spacing={0} bg="backgroundHomePage">
        <Box>
          <Sidebar />
        </Box>
        <Box w="100%">
          <Header />
        </Box>
      </Stack>
    </div>
  ),
});
