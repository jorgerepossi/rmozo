import HomePage from "@/components/pages/Home";

import { HydrateClient } from "@/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <div>crear layout de home</div>
      <HomePage />
    </HydrateClient>
  );
}
