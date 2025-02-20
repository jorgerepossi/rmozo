import HomePage from "@/components/pages/Home";

import { HydrateClient } from "@/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <HomePage />
    </HydrateClient>
  );
}
