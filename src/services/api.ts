import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../types/types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => {
        return 'restaurantes'
      }
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => {
        return `restaurantes/${id}`
      }
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api

export default api
