import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyJsonApi = createApi({
    reducerPath: "dummyJsonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        //all end points are hooks
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProductById : builder.query({
            query : (id)=> `/products/${id}`
        }),
        updateProduct : builder.mutation({
            query : ({id , body})=> ({
                url : `/products/${id}`,
                method : "PUT",
                body,
                headers : {
                    "Content-Type" : "application/json"
                }
            })
        }),
    }),
});

export const { useGetProductsQuery , useGetProductByIdQuery , useUpdateProductMutation} = dummyJsonApi;
