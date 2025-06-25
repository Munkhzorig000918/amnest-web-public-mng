// API Fetcher utility for Amnesty CMS - Mongol Bichig Version
// Based on the mn version's Fetcher.ts structure

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || process.env.STRAPI_API_KEY;

export default async function Fetcher(url, baseUrl = API_BASE_URL) {
  try {
    const fullUrl = `${baseUrl}${url}`;
    console.log("Fetching from:", fullUrl);

    const headers = {
      "Content-Type": "application/json",
    };

    // Add authorization header if API key is available
    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`;
    }

    const response = await fetch(fullUrl, {
      headers,
    });

    if (response.status >= 400) {
      if (response.status === 404) {
        return await response.json();
      }
      const errorData = await response.json();
      throw new Error(
        `API Error ${response.status}: ${JSON.stringify(errorData)}`
      );
    }

    return await response.json();
  } catch (e) {
    console.error("Fetcher Error:", e);
    throw e;
  }
}

export async function FetcherPut(url, body, baseUrl = API_BASE_URL) {
  try {
    const fullUrl = `${baseUrl}${url}`;
    console.log("PUT request to:", fullUrl);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add authorization header if API key is available
    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`;
    }

    const response = await fetch(fullUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    if (response.status >= 400) {
      if (response.status === 404) {
        return await response.json();
      }
      const errorData = await response.json();
      throw new Error(
        `API Error ${response.status}: ${JSON.stringify(errorData)}`
      );
    }

    return await response.json();
  } catch (e) {
    console.error("FetcherPut Error:", e);
    throw e;
  }
}

export async function FetcherPost(url, body, baseUrl = API_BASE_URL) {
  try {
    const fullUrl = `${baseUrl}${url}`;
    console.log("POST request to:", fullUrl);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add authorization header if API key is available
    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`;
    }

    const response = await fetch(fullUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (response.status >= 400) {
      if (response.status === 404) {
        return await response.json();
      }
      const errorData = await response.json();
      throw new Error(
        `API Error ${response.status}: ${JSON.stringify(errorData)}`
      );
    }

    return await response.json();
  } catch (e) {
    console.error("FetcherPost Error:", e);
    throw e;
  }
}

// Helper function to get image URL from Strapi media
export const getImageUrl = (imageData, baseUrl = "http://localhost:1337") => {
  if (!imageData) return null;

  // Handle different response formats from Strapi
  let url = null;

  // Try different possible structures
  if (typeof imageData === "string") {
    url = imageData;
  } else if (imageData.data?.attributes?.url) {
    // Standard Strapi format: { data: { attributes: { url: "..." } } }
    url = imageData.data.attributes.url;
  } else if (imageData.attributes?.url) {
    // Flattened format: { attributes: { url: "..." } }
    url = imageData.attributes.url;
  } else if (imageData.url) {
    // Direct format: { url: "..." }
    url = imageData.url;
  } else if (typeof imageData === "object" && imageData.formats) {
    // Handle formats object directly
    url =
      imageData.formats?.large?.url ||
      imageData.formats?.medium?.url ||
      imageData.formats?.small?.url ||
      imageData.url;
  }

  // Ensure url is a string before calling startsWith
  if (!url || typeof url !== "string") {
    return null;
  }

  // Return full URL if already absolute, otherwise prepend base URL
  if (url.startsWith("http")) {
    return url;
  }

  return `${baseUrl}${url}`;
};

// Helper function to format Strapi response data
export const formatStrapiResponse = (response) => {
  if (!response || !response.data) return null;

  if (Array.isArray(response.data)) {
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
      // Add locale information
      _locale: item.attributes?.locale,
      _localizations: item.attributes?.localizations,
    }));
  }

  return {
    id: response.data.id,
    ...response.data.attributes,
    _locale: response.data.attributes?.locale,
    _localizations: response.data.attributes?.localizations,
  };
};
