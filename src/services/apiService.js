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

// Posts and News Services - Using custom routes
export const postsService = {
  // Get posts list using custom route
  async getPostsList(params = {}) {
    try {
      const queryParams = {
        "pagination[page]": params.page || 1,
        "pagination[pageSize]": params.pageSize || 10,
        populate: "*",
        sort: "publishedAt:desc",
        locale: "mn",
        ...params,
      };

      const endpoint = buildEndpointUrl(API_ENDPOINTS.POSTS_LIST, queryParams);
      const response = await Fetcher(endpoint);
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
};
