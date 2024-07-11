import { createFileRoute } from "@tanstack/react-router";
import DailyView from "../../components/DailyView";

export const Route = createFileRoute("/_protected/daily")({
  component: () => <DailyPage />,
});

export function DailyPage() {
  return <DailyView />;
}
