import { Stack, Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Route = createFileRoute("/_protected")({
  component: () => <ProtectedLayout />,
});

export function ProtectedLayout() {
  return (
    <div style={{ height: "calc(100vh - 107px" }}>
      <Stack direction={["column", "row"]} spacing={0} bg="#1c2023">
        <Box>
          <Sidebar />
        </Box>
        <Box w="100%">
          <Header />
          <Outlet />
        </Box>
      </Stack>
    </div>
  );
}
