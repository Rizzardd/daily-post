import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

import customTheme from "../resources/theme/theme";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <AppRoot />
      </ChakraProvider>
    </QueryClientProvider>
  ),
});

function AppRoot() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <Suspense fallback={null}>
        <ReactQueryDevtools initialIsOpen={false} />
      </Suspense>
    </>
  );
}
