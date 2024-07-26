import Layout from '@/components/common/layout'
import {   HydrateClient } from "@/trpc/server";
import HomePage from '@/components/pages/Home'

export default function Home(){
  return (
    <HydrateClient>



          <Layout>
           <HomePage />
          </Layout>



    </HydrateClient>
)
}