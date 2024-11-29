"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"

export default function Page() {
  return (
    <>
      <section>
        <Tabs defaultValue="tab3" className="mt-4">
          <TabsList className="gap-x-4 px-6">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Monitoring</TabsTrigger>
            <TabsTrigger value="tab3">Audits</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1"></TabsContent>
          <TabsContent value="tab2"></TabsContent>
          <TabsContent value="tab3"></TabsContent>
        </Tabs>
      </section>
    </>
  )
}
