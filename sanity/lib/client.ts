import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'sy7ftxpf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // false = always fresh data at build time
})
