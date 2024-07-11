import { createFileRoute } from "@tanstack/react-router";
import { DailyListView } from "../../components/DailyListView";

export const Route = createFileRoute("/_protected/")({
  component: () => <DailyListPage />,
});

export function DailyListPage() {
  return <DailyListView />;
}
