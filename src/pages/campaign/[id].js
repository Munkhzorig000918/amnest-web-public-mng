import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import {
  useGetCompanyWorksQuery,
  useGetPostsQuery,
} from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function CampaignDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch company work by static_id
  const {
    data: companyWorksData,
    error: companyWorkError,
    isLoading: companyWorkLoading,
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

  // Get the specific company work (should be first item in array)
  const companyWork =
    companyWorksData && companyWorksData.length > 0
      ? companyWorksData[0]
      : null;

  // Fetch related posts/news for this company work
  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery(
    {
      filters: {
        company_work: {
          $eq: companyWork?.id,
        },
      },
      populate: "*",
      pageSize: 6,
      sort: "publishedAt:desc",
    },
    {
      skip: !companyWork?.id, // Skip until we have company work data
    }
  );

  // Loading state
  if (companyWorkLoading || !id) {
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
  if (companyWorkError || !companyWork) {
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Campaign Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Campaign Icon */}
            <div className="flex-shrink-0">
              <Image
                src={getImageUrl(companyWork.icon) || "/images/about1.png"}
                alt={companyWork.title}
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = "/images/about1.png";
                }}
              />
            </div>

            {/* Campaign Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyWork.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {companyWork.description}
              </p>

              {/* Campaign Features */}
              {companyWork.feature_title && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {companyWork.feature_title}
                  </h2>
                  {companyWork.feature_desc && (
                    <p className="text-gray-700">{companyWork.feature_desc}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Campaign Cover Image */}
          {companyWork.cover && (
            <div className="mt-8">
              <Image
                src={getImageUrl(companyWork.cover)}
                alt={companyWork.title}
                width={1200}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = "/images/about1.png";
                }}
              />
            </div>
          )}

          {/* YouTube Video */}
          {companyWork.youtube_video_id && (
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${companyWork.youtube_video_id}`}
                  title={companyWork.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-96"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Related News Section */}
        {postsData && postsData.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              ᠬᠠᠮᠠᠭᠠᠷᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ
            </h2>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {postsData.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => router.push(`/news/${post.id}`)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={getImageUrl(post.cover) || "/images/about1.png"}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "/images/about1.png";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description ||
                        post.content?.substring(0, 100) + "..."}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("mn-MN")}
                      </span>
                      <span className="text-blue-600 hover:text-blue-800">
                        ᠳᠡᠯᠭᠡᠷᠡᠩᠭᠦᠢ ᠤᠨᠰᠢᠬᠤ →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Related News */}
        {postsData && postsData.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              ᠡᠨᠡ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠳ᠋ᠤ ᠬᠠᠮᠠᠭᠠᠷᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ ᠦᠭᠡᠢ ᠪᠠᠶᠢᠨ᠎ᠠ
            </p>
          </div>
        )}

        {/* Back to Campaigns Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/campaign")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            ← ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠨᠢᠭᠤᠷ ᠳ᠋ᠤ ᠪᠤᠴᠠᠬᠤ
          </button>
        </div>
      </div>
    </Layout>
  );
}
