// API Fetcher utility for Amnesty CMS - Mongol Bichig Version
// Based on the mn version's Fetcher.ts structure

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || process.env.STRAPI_API_KEY;

// Mongolian Bichig number mapping
const mongolianNumbers = {
  0: "᠐",
  1: "᠑",
  2: "᠒",
  3: "᠓",
  4: "᠔",
  5: "᠕",
  6: "᠖",
  7: "᠗",
  8: "᠘",
  9: "᠙",
};

// Helper function to convert regular numbers to Mongolian Bichig numbers
export const toMongolianNumbers = (number) => {
  if (number === null || number === undefined) return "";

  return String(number)
    .split("")
    .map((digit) => {
      return mongolianNumbers[digit] || digit;
    })
    .join("");
};

// Helper function to format date with Mongolian Bichig numbers
export const formatMongolianDate = (
  dateString,
  format = "YYYY/MM/DD HH:mm"
) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  let formattedDate = format
    .replace("YYYY", toMongolianNumbers(year))
    .replace("MM", toMongolianNumbers(month))
    .replace("DD", toMongolianNumbers(day))
    .replace("HH", toMongolianNumbers(hours))
    .replace("mm", toMongolianNumbers(minutes));

  return formattedDate;
};

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
    console.log("POST body:", body);

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

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);

    // Get the response text first to check what we're dealing with
    const responseText = await response.text();
    console.log("Response text:", responseText);

    // Try to parse as JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse response as JSON:", parseError);
      console.error("Response was:", responseText);

      // If it's an HTML response, it's likely a server error
      if (
        responseText.includes("<html") ||
        responseText.includes("<!DOCTYPE")
      ) {
        throw new Error(
          `Server returned HTML instead of JSON. Status: ${response.status}`
        );
      }

      throw new Error(
        `Invalid JSON response: ${responseText.substring(0, 200)}...`
      );
    }

    if (response.status >= 400) {
      throw new Error(
        `API Error ${response.status}: ${JSON.stringify(responseData)}`
      );
    }

    return responseData;
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
