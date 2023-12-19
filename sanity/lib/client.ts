import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skU8uLR6JWvYz1Vrm7TnF5Hdsxo3Wjon6oh5vKnfPVJDTeW10isLBq9xpYlm9EHlzKH7llPNYKSOpo5EHZVCR7bhj7IrxJRh6JW5vFYVNQURgsfmZ15BjDdCnIebAlYaKG9euhekMCdkmTLENRKOJ7s1tSFCasFk0hvI865QQlFkX2Ubgu3w",
})
