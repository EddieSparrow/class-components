import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmList, FilmsApi } from "../../types/FilmContextInterface";
import {
  UseQuery,
  QueryDefinition,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  FetchArgs,
} from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yts.mx/api/v2/list_movies.json",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<FilmList, FilmsApi>({
      query: ({ inputValue = "", limit = 10, page = 1 }: FilmsApi) =>
        `?&query_term=${inputValue}&limit=${limit}&page=${page}`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
}: UseQuery<
  QueryDefinition<
    FilmsApi,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    >,
    never,
    FilmList,
    "api"
  >
> = apiSlice;
