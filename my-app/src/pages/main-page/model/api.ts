import { baseApi } from '../../../shared/api/base-api'

export const exampleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getExample: build.query({
      query: (id: string) => ({
        url: `example-endpoint/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetExampleQuery } = exampleApi