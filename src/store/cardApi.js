import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cardApi = createApi({
    reducerPath: "cardApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://rickandmortyapi.com/api/character"
        }),
    endpoints: (build) => ({
        getGoods: build.query({
            query(query = "") {
                return {
                    url: `${query}`,
                }
            },
            transformResponse: (response) => {
                return response.results.sort((a, b) => a.name.localeCompare(b.name));
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
        getItem: build.query({
            query: (id) => `/${id}`,

        })
    })


})

export const {useGetGoodsQuery, useGetItemQuery} = cardApi;

