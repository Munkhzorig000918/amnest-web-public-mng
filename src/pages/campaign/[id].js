import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import {
  useGetCompanyWorksQuery,
  useGetCompanyWorkByIdQuery,
  useGetCompanyWorkFeaturesQuery,
  useGetPostsQuery,
} from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function CampaignDetail() {
  const router = useRouter();
  const { id } = router.query;

  // First try to fetch by static_id
  const {
    data: companyWorksByStaticId,
    error: companyWorkStaticError,
    isLoading: companyWorkStaticLoading,
  } = useGetCompanyWorksQuery(
    {
      filters: {
        static_id: {
          $eq: id,
        },
      },
      populate: "deep",
    },
    {
      skip: !id, // Skip the query if id is not available yet
    }
  );

  // If static_id search returns no results, try by database ID
  const {
    data: companyWorkById,
    error: companyWorkByIdError,
    isLoading: companyWorkByIdLoading,
  } = useGetCompanyWorkByIdQuery(id, {
    skip: !id || (companyWorksByStaticId && companyWorksByStaticId.length > 0),
  });

  // Determine which company work to use
  const companyWork =
    companyWorksByStaticId && companyWorksByStaticId.length > 0
      ? companyWorksByStaticId[0]
      : companyWorkById;

  // Get the actual company work ID for features query
  const companyWorkId = companyWork?.id;

  // Fetch company work features using the database ID
  const {
    data: featuresData,
    error: featuresError,
    isLoading: featuresLoading,
  } = useGetCompanyWorkFeaturesQuery(
    {
      filters: {
        company_work: {
          $eq: companyWorkId,
        },
      },
      populate: "deep",
    },
    {
      skip: !companyWorkId, // Skip the query if company work ID is not available yet
    }
  );

  // Get posts from the populated company work data
  const companyWorkPosts = companyWork?.posts || [];

  // Fetch recent posts as fallback when no company work posts exist
  const {
    data: recentPostsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery(
    {
      "pagination[pageSize]": 6,
      sort: "publishedAt:desc",
    },
    {
      skip: companyWorkPosts.length > 0, // Skip if company work has posts
    }
  );

  // Use company work posts if available, otherwise use recent posts
  const postsData =
    companyWorkPosts.length > 0 ? companyWorkPosts : recentPostsData || [];

  // Determine loading state
  const isLoading = companyWorkStaticLoading || companyWorkByIdLoading || !id;

  // Determine error state
  const hasError =
    (companyWorkStaticError && companyWorkByIdError) ||
    (!companyWork && !isLoading);

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state
  if (hasError) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
            </h1>
            <p className="text-gray-600 mb-4">
              ᠲᠠᠯᠪᠢᠭᠰᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠤ᠋ᠯᠠᠭ᠎ᠠ ᠦᠵᠡᠭᠳᠡᠵᠤ ᠴᠢᠳᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ
            </p>
            <button
              onClick={() => router.push("/campaign")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠨᠢᠭᠤᠷ ᠳ᠋ᠤ ᠪᠤᠴᠠᠬᠤ
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="sm:h-screen flex flex-col overflow-hidden flex-1">
        {/* Hero Section */}
        <div className="relative h-[200px] sm:h-[300px] w-full flex-shrink-0">
          {companyWork.cover ? (
            <Image
              src={getImageUrl(companyWork.cover)}
              alt={companyWork.title || "Campaign cover"}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="p-4 text-white text-[10px] sm:text-lg md:text-xl lg:text-2xl font-bold text-start max-h-[150px] sm:max-h-[250px] w-full flex justify-center items-center overflow-x-auto"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {companyWork.title || "ᠻᠠᠮᠫᠠᠨᠢᠲᠤ"}
            </h1>
          </div>
        </div>

        {/* Content and Sidebar Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 overflow-hidden">
          {/* Content Section */}
          <div className="sm:flex-1 p-4">
            <div className="flex flex-row gap-2 sm:gap-10">
              {/* Info Header */}
              <div className="flex flex-row sm:flex-col items-start sm:items-center justify-between gap-4 flex-shrink-0">
                <div className="flex flex-col items-start gap-4">
                  <div
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm"
                  >
                    ᠻᠠᠮᠫᠠᠨᠢᠲᠤ
                  </div>

                  {/* Campaign Status */}
                  {companyWork.status && (
                    <div
                      className={`px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-medium ${
                        companyWork.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {companyWork.status === "active"
                        ? "ᠢᠳᠡᠪᢈᠢᠲᠡᠢ"
                        : "ᠳᠦᠦᠷᠡᠭᠰᠡᠨ"}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <button
                    className="bg-blue-600 text-white px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => router.push("/participation")}
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠣᠷᠤᠯᠴᠠᠬᠤ
                  </button>

                  <button
                    className="bg-gray-200 text-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-semibold hover:bg-gray-300 transition-colors"
                    onClick={() => router.push("/campaign")}
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠪᠤᠰᠠᠳ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠦᠵᠡᠬᠦ
                  </button>
                </div>

                {/* Campaign Date */}
                {companyWork.publishedAt && (
                  <div
                    className="text-xs sm:text-lg font-semibold"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {new Date(companyWork.publishedAt).toLocaleDateString(
                      "mn-MN"
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-2 flex-1 overflow-x-auto max-h-[300px]">
                {/* Campaign Description */}
                {companyWork.description && (
                  <div
                    className="text-xs sm:text-xl md:text-2xl font-semibold text-gray-800 border-r border-gray-200 pr-4"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: companyWork.description,
                    }}
                  />
                )}

                {/* Campaign Features */}
                {featuresData && featuresData.length > 0 && (
                  <div className="flex gap-4 overflow-x-auto">
                    {featuresData.map((feature, index) => (
                      <div
                        key={feature.id || index}
                        className="flex flex-col items-center gap-2 min-w-[200px] border-r border-gray-200 pr-4 last:border-r-0"
                      >
                        {feature.image && (
                          <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
                            <Image
                              src={getImageUrl(feature.image)}
                              alt={feature.title || "Feature image"}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        )}
                        <h3
                          className="text-[10px] sm:text-base font-semibold"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "upright",
                          }}
                        >
                          {feature.title}
                        </h3>
                        {feature.description && (
                          <p
                            className="text-[9px] sm:text-sm text-gray-600"
                            style={{
                              writingMode: "vertical-lr",
                              textOrientation: "upright",
                            }}
                          >
                            {feature.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Campaign Icon */}
                {companyWork.icon && (
                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
                      <Image
                        src={getImageUrl(companyWork.icon)}
                        alt={companyWork.title || "Campaign icon"}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <p
                      className="text-[10px] sm:text-sm font-medium"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠶ᠋ᠢᠨ ᠲᠡᠮᠳᠡᠭ
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Posts Sidebar */}
          <div className="w-full sm:w-20 bg-gray-50 overflow-y-auto max-h-[250px] sm:max-h-max">
            {postsData && postsData.length > 0 ? (
              <div className="bg-gray-100 p-4 w-full h-full flex flex-row sm:flex-col gap-4 items-start sm:items-center">
                <h3
                  className="text-xs sm:text-xl font-semibold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠬᠠᠮᠠᠭ᠎ᠠᠯᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡ
                </h3>
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 overflow-x-auto sm:overflow-x-visible">
                  {postsData.slice(0, 5).map((post, index) => (
                    <div
                      key={post.id || index}
                      className="bg-white p-3 cursor-pointer hover:bg-gray-50 transition-colors max-w-10 flex-shrink-0"
                      onClick={() => router.push(`/news/${post.id}`)}
                    >
                      <p
                        className="text-[10px] sm:text-sm font-medium"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                      >
                        {post.title?.length > 60
                          ? `${post.title.substring(0, 60)}...`
                          : post.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 w-full h-full flex items-center justify-center">
                <p
                  className="text-xs text-gray-600"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠬᠠᠮᠠᠭ᠎ᠠᠯᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡ ᠦᠭᠡᠢ
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
