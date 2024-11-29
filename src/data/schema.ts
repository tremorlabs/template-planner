import { z } from "zod"

const schemaAssignedPerson = z.object({
  name: z.string(),
  initials: z.string().length(1),
})

const schemaProject = z.object({
  company: z.string(),
  size: z.string(),
  probability: z.string(),
  duration: z.string(),
  status: z.enum(["Drafted", "Sent", "Closed"]),
  assigned: z.array(schemaAssignedPerson),
})

const schemaRegion = z.object({
  region: z.string(),
  project: z.array(schemaProject),
})

export const schemaQuotes = z.array(schemaRegion)

export type AssignedPerson = z.infer<typeof schemaAssignedPerson>
export type Project = z.infer<typeof schemaProject>
export type Region = z.infer<typeof schemaRegion>
export type Quotes = z.infer<typeof schemaQuotes>
