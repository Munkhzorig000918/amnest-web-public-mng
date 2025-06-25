// Local API Service for Next.js API routes
// This service calls the local Next.js API endpoints instead of external services

const LOCAL_API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:3000");

// Helper function for API calls
const makeApiCall = async (endpoint, options = {}) => {
  try {
    const url = `${LOCAL_API_BASE_URL}/api${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API Error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("Local API call error:", error);
    throw error;
  }
};

// Contact Service
export const localContactService = {
  // Submit contact request using local API
  async submitContactRequest(contactData) {
    try {
      const response = await makeApiCall("/contact-request/submit", {
        method: "POST",
        body: JSON.stringify(contactData),
      });
      return response;
    } catch (error) {
      console.error("Local contact request error:", error);
      throw error;
    }
  },
};

// Export the service
export default {
  contact: localContactService,
};
