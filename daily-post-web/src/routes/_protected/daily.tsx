import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/daily')({
  component: () => <div>Hello /_protected/daily!</div>
})