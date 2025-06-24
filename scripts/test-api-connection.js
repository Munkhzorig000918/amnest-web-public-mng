#!/usr/bin/env node

/**
 * Test script to verify API connection between Mongol Bichig web app and Amnesty CMS
 *
 * Usage: node scripts/test-api-connection.js
 */

const https = require("https");
const http = require("http");

// Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
const LOCALE = process.env.NEXT_PUBLIC_CMS_LOCALE || "mn-MN";

// Test endpoints - updated to match actual CMS structure
const ENDPOINTS = [
  // Custom post endpoints
  {
    path: "/posts/list",
    params: `locale=${LOCALE}&limit=1`,
    name: "Posts List",
  },
  // Standard Strapi endpoints
  {
    path: "/videos",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "Videos",
  },
  {
    path: "/libraries",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "Libraries",
  },
  {
    path: "/faqs",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "FAQs",
  },
  {
    path: "/events",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "Events",
  },
  {
    path: "/actions",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "Actions",
  },
  {
    path: "/stories",
    params: `locale=${LOCALE}&pagination[pageSize]=1&populate=*`,
    name: "Stories",
  },
];

// Colors for console output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https:") ? https : http;

    const req = protocol.get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({
            status: res.statusCode,
            data: jsonData,
            headers: res.headers,
          });
        } catch (error) {
          resolve({
            status: res.statusCode,
            data: data,
            headers: res.headers,
            parseError: error.message,
          });
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });
  });
}

async function testEndpoint(endpoint) {
  const url = `${API_BASE_URL}${endpoint.path}?${endpoint.params}`;

  try {
    log(`Testing: ${endpoint.name} (${endpoint.path})`, "blue");
    const response = await makeRequest(url);

    if (response.status === 200) {
      const data = response.data;

      if (data) {
        // Handle custom post endpoint response
        if (endpoint.path.startsWith("/posts/")) {
          if (data.data && Array.isArray(data.data)) {
            const count = data.data.length;
            const totalCount = data.total || "unknown";
            log(
              `  ✓ Success: ${count} items returned (total: ${totalCount})`,
              "green"
            );

            if (count > 0) {
              const firstItem = data.data[0];
              const locale = firstItem.locale;

              if (locale === LOCALE) {
                log(`  ✓ Correct locale: ${locale}`, "green");
              } else {
                log(
                  `  ⚠ Unexpected locale: ${locale} (expected: ${LOCALE})`,
                  "yellow"
                );
              }

              const title = firstItem.title;
              if (title) {
                log(
                  `  ✓ Content preview: "${title.substring(0, 50)}..."`,
                  "green"
                );
              }
            }
            return {
              success: true,
              endpoint: endpoint.name,
              count: totalCount,
            };
          } else {
            log(`  ⚠ No data array in response`, "yellow");
            return {
              success: false,
              endpoint: endpoint.name,
              error: "No data array",
            };
          }
        }
        // Handle standard Strapi endpoint response
        else if (data.data) {
          const count = Array.isArray(data.data) ? data.data.length : 1;
          const totalCount = data.meta?.pagination?.total || "unknown";

          log(
            `  ✓ Success: ${count} items returned (total: ${totalCount})`,
            "green"
          );

          // Check if content has Mongol Bichig locale
          if (Array.isArray(data.data) && data.data.length > 0) {
            const firstItem = data.data[0];
            const locale = firstItem.attributes?.locale;

            if (locale === LOCALE) {
              log(`  ✓ Correct locale: ${locale}`, "green");
            } else {
              log(
                `  ⚠ Unexpected locale: ${locale} (expected: ${LOCALE})`,
                "yellow"
              );
            }

            // Check for title/name field
            const attrs = firstItem.attributes || {};
            const hasTitle = attrs.title || attrs.question || attrs.name;

            if (hasTitle) {
              log(
                `  ✓ Content preview: "${hasTitle.substring(0, 50)}..."`,
                "green"
              );
            }
          }

          return { success: true, endpoint: endpoint.name, count: totalCount };
        } else {
          log(`  ⚠ No data field in response`, "yellow");
          return {
            success: false,
            endpoint: endpoint.name,
            error: "No data field",
          };
        }
      } else {
        log(`  ⚠ Empty response`, "yellow");
        return {
          success: false,
          endpoint: endpoint.name,
          error: "Empty response",
        };
      }
    } else {
      log(`  ✗ HTTP Error: ${response.status}`, "red");
      if (response.data && response.data.error) {
        log(`    Error details: ${response.data.error.message}`, "red");
      }
      return {
        success: false,
        endpoint: endpoint.name,
        error: `HTTP ${response.status}`,
      };
    }
  } catch (error) {
    log(`  ✗ Request failed: ${error.message}`, "red");
    return { success: false, endpoint: endpoint.name, error: error.message };
  }
}

async function testApiConnection() {
  log("🧪 Testing API Connection to Amnesty CMS", "bold");
  log(`📍 Base URL: ${API_BASE_URL}`, "blue");
  log(`🌐 Locale: ${LOCALE}`, "blue");
  log("");

  const results = [];

  // Test each endpoint
  for (const endpoint of ENDPOINTS) {
    const result = await testEndpoint(endpoint);
    results.push(result);
    log(""); // Empty line between tests
  }

  // Summary
  log("📊 Test Summary:", "bold");
  log("═".repeat(50), "blue");

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  log(
    `✅ Successful endpoints: ${successful.length}/${results.length}`,
    "green"
  );
  log(
    `❌ Failed endpoints: ${failed.length}/${results.length}`,
    failed.length > 0 ? "red" : "green"
  );

  if (successful.length > 0) {
    log("\n✅ Working endpoints:", "green");
    successful.forEach((r) => {
      log(`  • ${r.endpoint} (${r.count || 0} items)`, "green");
    });
  }

  if (failed.length > 0) {
    log("\n❌ Failed endpoints:", "red");
    failed.forEach((r) => {
      log(`  • ${r.endpoint}: ${r.error}`, "red");
    });
  }

  log("");

  if (successful.length === results.length) {
    log("🎉 All tests passed! API connection is working correctly.", "green");
    process.exit(0);
  } else if (successful.length > 0) {
    log(
      "⚠️  Some endpoints are working. Check the failed ones above.",
      "yellow"
    );
    process.exit(1);
  } else {
    log(
      "💥 All tests failed. Check your CMS configuration and network connection.",
      "red"
    );
    process.exit(1);
  }
}

// Additional health check
async function testHealthCheck() {
  log("🏥 Testing CMS Health Check...", "blue");

  try {
    const healthUrl = API_BASE_URL.replace("/api", "/_health");
    const response = await makeRequest(healthUrl);

    if (response.status === 200) {
      log("  ✓ CMS is responding", "green");
    } else {
      log("  ⚠ CMS health check returned non-200 status", "yellow");
    }
  } catch (error) {
    log("  ℹ Health check endpoint not available (this is normal)", "blue");
  }

  log("");
}

// Run tests
(async () => {
  try {
    await testHealthCheck();
    await testApiConnection();
  } catch (error) {
    log(`💥 Unexpected error: ${error.message}`, "red");
    process.exit(1);
  }
})();
