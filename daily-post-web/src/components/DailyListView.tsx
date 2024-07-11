import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { http } from "../infra/http";
import dayjs from "dayjs";

export function DailyListView() {
  const { isLoading, data } = useQuery({
    queryKey: ["dailies"],
    queryFn: async () => {
      const { data } = await http.get("daily/all");
      return data;
    },
  });

  return (
    <Flex
      style={{
        height: "calc(100vh - 107px)",
        overflowY: "auto",
      }}
      direction="column"
      alignItems="center"
      color="white"
    >
      {data ? data.map((item: any) => <DailyItem item={item} />) : ""}
    </Flex>
  );
}

export function DailyItem({ item }: { item: any }) {
  const { isLoading, data } = useQuery({
    queryKey: ["user", item.userId],
    queryFn: async () => {
      const { data } = await http.get<string>(`user/${item.userId}`);
      return data;
    },
  });

  return (
    <Flex
      direction="column"
      maxW="600px"
      p="16px"
      w="100%"
      px="32px"
      boxShadow="md"
      bg="#272a2f"
      rounded="md"
      m="16px"
    >
      <Text my={"8px"}>O que fiz ontem?</Text>
      <Text color="gray.400">{item?.done}</Text>

      <Text my={"8px"}>O que irei fazer hoje?</Text>
      <Text color="gray.400">{item?.todo}</Text>

      <Text my={"8px"}>Impedimentos/Ajuda?</Text>
      <Text color="gray.400">{item?.issues}</Text>

      <Flex
        mt="16px"
        mb="8px"
        pt="16px"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text color="gray.400">{dayjs(item?.date!).format("MM/DD/YYYY [às] HH:mm")}</Text>
        <Flex flex={1}></Flex>
        <Avatar name={isLoading ? "..." : data} size="sm" mr="8px" />
        <Text>{isLoading ? "..." : data}</Text>
      </Flex>
    </Flex>
  );
}
