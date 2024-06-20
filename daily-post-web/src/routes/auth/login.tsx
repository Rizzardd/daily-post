import { Button, Container, Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { http } from "../../infra/http";
import { useState } from "react";
import { resourceUsage } from "process";
import { useAuthStore } from "../../stores/auth.store";

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

  return (
    <Container>
    <div>
      <Input value={email} onChange={(evt) => setEmail(evt.target.value)} />
      <Input
        type="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button
        isLoading={isPending}
        loadingText="Entrando..."
        onClick={async () => {
          const result = await mutateAsync({ email, password });
          updateAccessToken(result);
        }}
      > 
        Entrar 
      </Button> 
    </div>
</Container>

  );
}
