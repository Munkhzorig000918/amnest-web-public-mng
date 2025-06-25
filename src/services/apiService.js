// API Service for Amnesty CMS - Mongol Bichig Version
// Using correct endpoints: custom routes for posts, standard routes for others

import Fetcher, {
  FetcherPost,
  FetcherPut,
  formatStrapiResponse,
} from "@/utils/fetcher";
import {
  API_ENDPOINTS,
  buildEndpointUrl,
  DEFAULT_QUERY_PARAMS,
} from "@/config/apiEndpoints";

// Posts and News Services - Using both custom routes and standard routes
export const postsService = {
  // Get posts using standard /posts endpoint (what user requested)
  async getPosts(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "publishedAt:desc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      // Add any filters from params
      if (params.filters) {
        Object.keys(params.filters).forEach((key) => {
          queryParams[key] = params.filters[key];
        });
      }

      const endpoint = buildEndpointUrl(API_ENDPOINTS.POSTS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  // Get posts list using custom route
  async getPostsList(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "publishedAt:desc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.POSTS_LIST, queryParams);
      const response = await Fetcher(endpoint);

      // The posts API returns a custom structure, let's normalize it to match other services
      // Posts API returns: { data: [...], currentPage, length, total, limit }
      // We want to return the same structure as formatStrapiResponse for consistency
      if (response && response.data && Array.isArray(response.data)) {
        return {
          data: response.data.map((item) => ({
            id: item.id,
            title: item.title,
            body: item.body,
            short_description: item.short_description,
            publishedAt: item.publishedAt,
            createdAt: item.createdAt,
            post_date: item.post_date,
            locale: item.locale,
            cover: item.cover,
            post_categories: item.post_categories,
            post_topics: item.post_topics,
            // Add metadata
            _locale: item.locale,
          })),
          meta: {
            pagination: {
              page: response.currentPage || 1,
              pageSize: response.limit || 10,
              pageCount: Math.ceil(
                (response.total || 0) / (response.limit || 10)
              ),
              total: response.total || 0,
            },
          },
        };
      }

      return response;
    } catch (error) {
      console.error("Error fetching posts list:", error);
      throw error;
    }
  },

  // Get single post by ID using custom route
  async getPostById(id) {
    try {
      const endpoint = `${API_ENDPOINTS.POSTS_GET}/${id}?populate=*&locale=mn`;
      const response = await Fetcher(endpoint);
      return response;
    } catch (error) {
      console.error("Error fetching post by ID:", error);
      throw error;
    }
  },

  // Get recommended posts using custom route
  async getRecommendedPosts(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        ...params,
      };
      const endpoint = buildEndpointUrl(
        API_ENDPOINTS.POSTS_RECOMMENDED,
        queryParams
      );
      const response = await Fetcher(endpoint);
      return response;
    } catch (error) {
      console.error("Error fetching recommended posts:", error);
      throw error;
    }
  },

  // Get statements using standard route
  async getStatements(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "id:desc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };
      const endpoint = buildEndpointUrl(API_ENDPOINTS.STATEMENTS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching statements:", error);
      throw error;
    }
  },
};

// Events Service - Using standard routes
export const eventsService = {
  async getEvents(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "start_date:asc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.EVENTS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  },

  async getEventById(id) {
    try {
      const endpoint = buildEndpointUrl(`${API_ENDPOINTS.EVENTS}/${id}`, {
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching event by ID:", error);
      throw error;
    }
  },
};

// Actions Service - Using standard routes
export const actionsService = {
  async getActions(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.ACTIONS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching actions:", error);
      throw error;
    }
  },

  async getActionById(id) {
    try {
      const endpoint = buildEndpointUrl(`${API_ENDPOINTS.ACTIONS}/${id}`, {
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching action by ID:", error);
      throw error;
    }
  },
};

// Videos Service - Using standard routes
export const videosService = {
  async getVideos(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "publishedAt:desc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.VIDEOS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  },
};

// Libraries Service - Using standard routes
export const librariesService = {
  async getLibraries(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.LIBRARIES, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching libraries:", error);
      throw error;
    }
  },

  async getLibraryGroups() {
    try {
      const endpoint = buildEndpointUrl(API_ENDPOINTS.LIBRARY_GROUPS, {
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching library groups:", error);
      throw error;
    }
  },
};

// FAQs Service - Using standard routes
export const faqsService = {
  async getFaqs(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.FAQS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      throw error;
    }
  },

  async getFaqById(id) {
    try {
      const endpoint = buildEndpointUrl(`${API_ENDPOINTS.FAQS}/${id}`, {
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching FAQ by ID:", error);
      throw error;
    }
  },
};

// Slideshows Service - Using standard routes
export const slideshowsService = {
  async getSlideshows(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
        sort: "publishedAt:desc",
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.SLIDESHOWS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching slideshows:", error);
      throw error;
    }
  },

  async getHomepageSliders(params = {}) {
    try {
      const queryParams = {
        populate: "deep",
        locale: "mn",
        ...params,
      };

      const endpoint = buildEndpointUrl(
        API_ENDPOINTS.HOMEPAGE_SLIDERS,
        queryParams
      );
      const response = await Fetcher(endpoint);

      // Extract posts data from homepage-slider singleType (matching SvelteKit app structure)
      // SvelteKit: sliders?.data?.attributes?.posts?.data || []
      const slidersData = response?.data?.attributes?.posts?.data || [];

      return {
        data: slidersData,
        meta: response?.meta || {},
      };
    } catch (error) {
      console.error("Error fetching homepage sliders:", error);
      // Return empty array if homepage-slider content doesn't exist yet
      return {
        data: [],
        meta: {},
      };
    }
  },
};

// Reports Service - Using standard routes
export const reportsService = {
  async getReports(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        sort: "id:desc",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };
      const endpoint = buildEndpointUrl(API_ENDPOINTS.REPORTS, queryParams);
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching reports:", error);
      throw error;
    }
  },

  async getReportById(id) {
    try {
      const endpoint = buildEndpointUrl(`${API_ENDPOINTS.REPORTS}/${id}`, {
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching report by ID:", error);
      throw error;
    }
  },
};

// Company Work (Campaigns) Service - Using standard routes
export const campaignsService = {
  async getCompanyWorks(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };

      const endpoint = buildEndpointUrl(
        API_ENDPOINTS.COMPANY_WORKS,
        queryParams
      );
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching company works:", error);
      throw error;
    }
  },

  async getCompanyWorkById(id) {
    try {
      const endpoint = buildEndpointUrl(API_ENDPOINTS.COMPANY_WORKS, {
        "filters[static_id][$eq]": id,
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching company work by ID:", error);
      throw error;
    }
  },

  async getCompanyWorkFeatures(staticId) {
    try {
      const endpoint = buildEndpointUrl(API_ENDPOINTS.COMPANY_WORK_FEATURES, {
        "filters[company_work][static_id][$eq]": staticId,
        populate: "*",
        locale: "mn",
      });
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching company work features:", error);
      throw error;
    }
  },
};

// Settings Service - Using standard routes
export const settingsService = {
  async getContactInfo() {
    try {
      const response = await Fetcher(`${API_ENDPOINTS.CONTACT_INFO}?locale=mn`);
      return response?.data?.attributes || null;
    } catch (error) {
      console.error("Error fetching contact info:", error);
      throw error;
    }
  },

  async getWebsiteSettings() {
    try {
      const response = await Fetcher(
        `${API_ENDPOINTS.WEBSITE_SETTINGS}?locale=mn`
      );
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching website settings:", error);
      throw error;
    }
  },
};

// Merchandises Service - Using standard routes
export const merchService = {
  async getMerchandises(params = {}) {
    try {
      const queryParams = {
        populate: "*",
        locale: "mn",
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
      };
      const endpoint = buildEndpointUrl(
        API_ENDPOINTS.MERCHANDISES,
        queryParams
      );
      const response = await Fetcher(endpoint);
      return formatStrapiResponse(response);
    } catch (error) {
      console.error("Error fetching merchandises:", error);
      throw error;
    }
  },
};

// Export all services
export default {
  posts: postsService,
  events: eventsService,
  actions: actionsService,
  videos: videosService,
  libraries: librariesService,
  reports: reportsService,
  campaigns: campaignsService,
  settings: settingsService,
  merch: merchService,
  faqs: faqsService,
  slideshows: slideshowsService,
};
