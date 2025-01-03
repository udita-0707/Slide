import Infobar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import {
    HydrationBoundary,
    QueryClient, dehydrate,
  } from '@tanstack/react-query'
import { PrefetchUserProfile } from "@/react-query/prefetch";

type Props = {
    children: React.ReactNode
    params: {
        slug: string
    }
}

const Layout = async({children, params}: Props) => {
    //Query we will be using react query library for caching functionalities
    //Optimistic UI, how query clinet works under the hood
    //WIP: Query Client fetch data

    const query = new QueryClient()

    await PrefetchUserProfile(query)
    return (
        <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
          className="
      lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      "
        >
          <Infobar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
    )
}   

export default Layout

