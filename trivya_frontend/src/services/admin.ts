import api from "./api"

const adminApi = api.injectEndpoints({
  endpoints: build => ({
    viewAllQuestions: build.query<Record<string, string>, void>({
      query: () => "http://localhost:4000/questions",
      providesTags: ["Pokemon"]
    }),
    viewQuestion: build.query<Record<string, string>, any>({
      query: ({
        uuid, 
        content, 
        contentMt, 
        category, 
        fact, 
        factMt, 
        difficulty
    }) => `http://localhost:4000/question
    ${uuid ? `?uuid=${uuid}` : ""}
    ${content ? `?content=${content}` : ""}
    ${contentMt ? `?contentMt=${contentMt}` : ""}
    ${category ? `?category=${category}` : ""}
    ${fact ? `?fact=${fact}` : ""}
    ${factMt ? `?factMt=${factMt}` : ""}
    ${difficulty ? `?difficulty=${difficulty}` : ""}
    `,
      providesTags: ["Pokemon"]
    })
    // ,
    // getPokemonByType: build.query<Record<string, string>, string>({
    //   query: type => `https://pokeapi.co/api/v2/pokemon/${type}`,
    //   providesTags: ["Pokemon"]
    // })
  }),
  overrideExisting: false
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useViewAllQuestionsQuery,
  useViewQuestionQuery
//   useGetPokemonByTypeQuery
} = adminApi
