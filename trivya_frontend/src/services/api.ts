import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// initialize an empty api service that we'll inject endpoints into later as needed
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "localhost:3000" }),
  endpoints: () => ({}),
  tagTypes: [
    "Pokemon"
  ]
})

export default api
