import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  API_CONFIG,
  buildApiUrl,
  buildPostApiUrl,
  formatStrapiResponse,
  formatPostResponse,
  MOCK_DATA,
} from "@/config/api";

// Mock query function for demo mode
const mockQuery = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { data, total: data.length } });
    }, delay);
  });
};

// Define a service using the Amnesty CMS base URL
export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "Post",
    "Event",
    "Action",
    "Video",
    "Story",
    "Library",
    "FAQ",
    "Slideshow",
  ],
  endpoints: (builder) => ({
    // Posts endpoints - using standard Strapi API
    getPosts: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.POSTS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Post"],
    }),

    getPostById: builder.query({
      query: (id) => {
        const url = buildApiUrl(`${API_CONFIG.ENDPOINTS.POSTS}/${id}`);
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),

    getRecommendedPosts: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.POSTS, {
          "pagination[pageSize]": 3,
          sort: "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        const result = formatStrapiResponse(response);
        // Return first 3 posts as recommended
        return result.data ? result.data.slice(0, 3) : [];
      },
      providesTags: ["Post"],
    }),

    // Events endpoints - using standard Strapi API
    getEvents: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.EVENTS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "start_date:asc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Event"],
    }),

    getEventById: builder.query({
      query: (id) => {
        const url = buildApiUrl(`${API_CONFIG.ENDPOINTS.EVENTS}/${id}`);
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: (result, error, id) => [{ type: "Event", id }],
    }),

    // Actions endpoints - using standard Strapi API
    getActions: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.ACTIONS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Action"],
    }),

    getActionById: builder.query({
      query: (id) => {
        const url = buildApiUrl(`${API_CONFIG.ENDPOINTS.ACTIONS}/${id}`);
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: (result, error, id) => [{ type: "Action", id }],
    }),

    // Videos endpoints - using standard Strapi API
    getVideos: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.VIDEOS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Video"],
    }),

    getVideoById: builder.query({
      query: (id) => {
        const url = buildApiUrl(`${API_CONFIG.ENDPOINTS.VIDEOS}/${id}`);
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: (result, error, id) => [{ type: "Video", id }],
    }),

    // Stories endpoints - using standard Strapi API
    getStories: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.STORIES, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Story"],
    }),

    // Library endpoints - using standard Strapi API
    getLibraries: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.LIBRARIES, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "createdAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Library"],
    }),

    getLibraryById: builder.query({
      query: (id) => {
        const url = buildApiUrl(`${API_CONFIG.ENDPOINTS.LIBRARIES}/${id}`);
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: (result, error, id) => [{ type: "Library", id }],
    }),

    // FAQs endpoints - using standard Strapi API
    getFaqs: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.FAQS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["FAQ"],
    }),

    // Slideshows endpoints - using standard Strapi API
    getSlideshows: builder.query({
      query: (params = {}) => {
        const url = buildApiUrl(API_CONFIG.ENDPOINTS.SLIDESHOWS, {
          "pagination[pageSize]":
            params.pageSize || API_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE,
          "pagination[page]": params.page || 1,
          sort: params.sort || "publishedAt:desc",
          ...params,
        });
        return url.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatStrapiResponse(response);
      },
      providesTags: ["Slideshow"],
    }),

    // Homepage content (combination of multiple content types)
    getHomepageContent: builder.query({
      query: () => {
        // This will be used to fetch multiple content types for homepage
        const postsUrl = buildPostApiUrl(API_CONFIG.ENDPOINTS.POSTS_LIST, {
          limit: 6,
        });
        return postsUrl.replace(API_CONFIG.BASE_URL, "");
      },
      transformResponse: (response) => {
        return formatPostResponse(response);
      },
      providesTags: ["Post"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetRecommendedPostsQuery,
  useGetEventsQuery,
  useGetEventByIdQuery,
  useGetActionsQuery,
  useGetActionByIdQuery,
  useGetVideosQuery,
  useGetVideoByIdQuery,
  useGetStoriesQuery,
  useGetLibrariesQuery,
  useGetLibraryByIdQuery,
  useGetFaqsQuery,
  useGetSlideshowsQuery,
  useGetHomepageContentQuery,
} = apiService;
