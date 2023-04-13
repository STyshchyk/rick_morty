import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface ICardProps {
    personImg: string,
    personName: string,
    personRace: string,
    id: number
}

export const cardApi = createApi({
    reducerPath: "cardApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://rickandmortyapi.com/api/character"
        }),
    endpoints: (build) => ({
        getGoods: build.query<ICardProps, string[]>({
            query(query) {
                return {
                    url: `${query}`,
                }
            },

        }),
        getItem: build.query({
            query: (id) => `/${id}`,

        })
    })
})

export const {
    useGetGoodsQuery, useGetItemQuery
} = cardApi;

