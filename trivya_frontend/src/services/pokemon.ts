import api from "./api"

const pokemonApi = api.injectEndpoints({
  endpoints: build => ({
    getPokemonByName: build.query<Record<string, string>, string>({
      query: name => `https://pokeapi.co/api/v2/pokemon/${name}`,
      providesTags: ["Pokemon"]
    }),
    getPokemonByType: build.query<Record<string, string>, string>({
      query: type => `https://pokeapi.co/api/v2/pokemon/${type}`,
      providesTags: ["Pokemon"]
    })
  }),
  overrideExisting: false
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery
} = pokemonApi
