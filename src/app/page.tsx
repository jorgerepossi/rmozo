import {   HydrateClient } from "@/trpc/server";
import HomePage from '@/components/pages/Home'

export default function Home(){
  return (
    <HydrateClient>
      <div>
        crear layout de home
      </div>
      <HomePage />
    </HydrateClient>
)
}