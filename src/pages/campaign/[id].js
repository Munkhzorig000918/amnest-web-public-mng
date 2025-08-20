import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import StaticHeader from "@/components/common/StaticHeader";
import Button from "@/components/common/Button";
import {
  useGetCompanyWorksQuery,
  useGetCompanyWorkByIdQuery,
  useGetCompanyWorkFeaturesQuery,
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
      skip: !id,
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
      skip: !companyWorkId,
    }
  );

  // Get posts from the populated company work data
  const postsData = companyWork?.posts || [];

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
      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col w-full">
        {/* Mobile Hero Section */}
        <div className="relative h-[200px] w-full flex-shrink-0">
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
              className="p-4 text-white text-lg font-bold text-center"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {companyWork.title || "ᠻᠠᠮᠫᠠᠨᠢᠲᠤ"}
            </h1>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="flex flex-col gap-6 p-4">
          {/* Mobile Description */}
          {companyWork.description && (
            <div className="flex flex-row gap-2">
              <h2
                className="text-xl font-bold mb-4"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠠᠢᠯᠪᠤᠷᠢ
              </h2>
              <div
                className="text-base text-gray-800"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                dangerouslySetInnerHTML={{
                  __html: companyWork.description,
                }}
              />
            </div>
          )}

          {/* Mobile Video */}
          {companyWork.video_url && (
            <div>
              <h2 className="text-xl font-bold mb-4">ᠪᠢᠳᠢᠶᠣ</h2>
              <div className="w-full aspect-video relative">
                <iframe
                  width="100%"
                  height="100%"
                  src={companyWork.video_url}
                  title="Campaign Video"
                  className="border-0 rounded"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Mobile Features */}
          {featuresData && featuresData.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">ᢈᠢᠨᠠᠷ</h2>
              <div className="flex flex-col gap-4">
                {featuresData.map((feature, index) => (
                  <div
                    key={feature.id || index}
                    className="flex flex-col items-center gap-2"
                  >
                    {feature.image && (
                      <div className="w-16 h-16 relative">
                        <Image
                          src={getImageUrl(feature.image)}
                          alt={feature.title || "Feature image"}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-xs text-gray-600 text-center">
                        {feature.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Posts */}
          {postsData && postsData.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">ᠬᠠᠮᠠᠭ᠎ᠠᠯᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡ</h2>
              <div className="flex flex-col gap-2">
                {postsData.slice(0, 3).map((post, index) => (
                  <div
                    key={post.id || index}
                    className="bg-white p-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200 rounded"
                    onClick={() => router.push(`/news/${post.id}`)}
                  >
                    <p className="text-sm font-medium">
                      {post.title?.length > 100
                        ? `${post.title.substring(0, 100)}...`
                        : post.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="h-full p-4 hidden sm:flex gap-7 overflow-x-auto w-auto flex-shrink-0 max-h-screen min-w-screen">
        {/* Campaign Title Header */}
        <StaticHeader
          image={
            companyWork.cover
              ? getImageUrl(companyWork.cover)
              : "/images/news1.png"
          }
          alt="Campaign Page Header"
          width="90rem"
          title={companyWork.title}
        />

        {/* Campaign Description */}
        {companyWork.description && (
          <div className="flex gap-4">
            <h2
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠲᠠᠢᠯᠪᠤᠷᠢ
            </h2>
            <div
              className="text-lg text-gray-800 max-w-[600px]"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              dangerouslySetInnerHTML={{
                __html: companyWork.description,
              }}
            />
          </div>
        )}

        {/* Video Section */}
        {companyWork.video_url && (
          <div className="flex gap-4">
            <h2
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠪᠢᠳᠢᠶᠣ
            </h2>
            <div className="w-[600px] h-[315px] relative">
              <iframe
                width="600"
                height="315"
                src={companyWork.video_url}
                title="Campaign Video"
                className="border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Campaign Features Section */}
        {featuresData && featuresData.length > 0 && (
          <div className="flex gap-4">
            <h2
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠶ᠋ᠢᠨ ᢈᠢᠨᠠᠷ
            </h2>
            <div className="max-h-[600px] overflow-y-auto">
              <div className="grid gap-6">
                {featuresData.map((feature, index) => (
                  <div
                    key={feature.id || index}
                    className="flex gap-6 p-6 bg-gray-50 rounded-lg border"
                  >
                    {feature.image && (
                      <div className="w-32 h-32 flex-shrink-0 relative">
                        <Image
                          src={getImageUrl(feature.image)}
                          alt={feature.title || "Feature image"}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-4"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <div
                          className="text-base text-gray-700"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "upright",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: feature.description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Posts Section - Using News Layout Pattern */}
        {postsData && postsData.length > 0 && (
          <div className="flex gap-4">
            <h2
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠬᠠᠮᠠᠭ᠎ᠠᠯᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᢉᠡ
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-3 gap-4 max-w-[900px] min-h-[900px]">
              {postsData.slice(0, 9).map((post, index) => (
                <div
                  key={post.id || index}
                  className="w-full h-full flex items-end space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => router.push(`/news/${post.id}`)}
                >
                  <h3
                    className="max-w-16 line-clamp-3 h-full text-sm"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    title={post.title}
                  >
                    {post.title?.length > 50
                      ? `${post.title.substring(0, 50)}...`
                      : post.title}
                  </h3>
                  <div className="relative h-[300px] w-[300px] aspect-square shadow-md">
                    <Image
                      src={
                        post.cover
                          ? getImageUrl(post.cover)
                          : "/images/news1.png"
                      }
                      alt={post.title || "News image"}
                      fill
                      className="object-cover rounded-xl w-full h-full"
                      onError={(e) => {
                        e.target.src = "/images/news1.png";
                      }}
                    />
                    <Button
                      text="ᠮᠡᠳᠡᢉᠡ"
                      type="primary"
                      className="absolute top-0 right-0 text-black"
                    />
                  </div>
                  <Button
                    text="ᠤᠩᠰᠢᠬᠤ"
                    type="secondary"
                    className="text-black h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
