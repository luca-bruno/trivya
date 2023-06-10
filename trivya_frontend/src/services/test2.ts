import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const pokemonApi2 = createApi({
  reducerPath: "pokemonApi2",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: builder => ({
    getPokemonByName2: builder.query<any, string>({
      query: name => `pokemon/${name}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByName2Query } = pokemonApi2
