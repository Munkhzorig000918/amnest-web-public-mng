import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import apiService from "@/services/apiService";
import { getImageUrl, formatMongolianDate } from "@/utils/fetcher";
import Button from "@/components/common/Button";
import Layout from "@/components/layout/Layout";
import { Share2, Facebook } from "lucide-react";

export default function SingleNews() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch single post
        const postData = await apiService.posts.getPostById(id);
        console.log("Single post response:", postData);
        setPost(postData);

        // Fetch recommended posts
        const recommendedData = await apiService.posts.getRecommendedPosts({
          limit: 6,
        });
        console.log("Recommended posts response:", recommendedData);
        console.log("Recommended posts data:", recommendedData?.data);
        console.log("Recommended posts length:", recommendedData?.data?.length);
        setRecommended(
          Array.isArray(recommendedData)
            ? recommendedData
            : recommendedData?.data || []
        );

        // If post has featured topic, fetch related news
        if (postData?.featured_topic?.id) {
          const relatedData = await apiService.posts.getPostsList({
            page: 1,
            pageSize: 6,
            filters: {
              "filters[post_topics][id][$eq]": postData.featured_topic.id,
              "filters[id][$ne]": id, // Exclude current post
            },
          });
          console.log("Related news response:", relatedData);
          setRelatedNews(relatedData?.data || []);
        }
      } catch (err) {
        console.error("Error fetching single news data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleShare = (platform) => {
    const url = `${window.location.origin}/news/${id}`;
    const title = post?.title || "ᠮᠡᠳᠡᢉᠡ";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "general":
        if (navigator.share) {
          navigator.share({
            title,
            url,
          });
        } else {
          navigator.clipboard.writeText(url);
          alert("ᠯᠢᠩᠺ ᠬᠤᠪᠢᠶᠠᠯᠠᠪᠠ");
        }
        break;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p
              className="mt-4 text-gray-600"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-red-600">
            <p
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
            </p>
            <button
              onClick={() => router.back()}
              className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ᠪᠤᠴᠠᠬᠤ
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const publishedAt = formatMongolianDate(post.publishedAt);
  const coverImage = getImageUrl(post.cover) || "/images/news1.png";

  return (
    <Layout>
      <div className="sm:h-screen flex flex-col overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[200px] sm:h-[300px] w-full flex-shrink-0">
          <Image
            src={coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="p-4 text-white text-[10px] sm:text-lg md:text-xl lg:text-2xl font-bold text-start max-h-[150px] sm:max-h-[250px] w-full flex justify-center items-center overflow-x-auto"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {post.title}
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
                    ᠮᠡᠳᠡᢉᠡ
                  </div>
                  <button
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 bg-[#385898] text-white px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-semibold hover:bg-[#2d4373] transition-colors"
                  >
                    <Facebook size={16} />
                    ᠬᠤᠪᠢᠶᠠᠯᠴᠠᠬᠤ
                  </button>
                  <button
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    onClick={() => handleShare("general")}
                    className="flex items-center gap-2 bg-gray-600 text-white px-2 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <Share2 size={16} />
                    ᠬᠤᠪᠢᠶᠠᠯᠠᠬᠤ
                  </button>
                </div>
                <div
                  className="text-xs sm:text-lg font-semibold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {publishedAt}
                </div>
              </div>

              <div className="flex gap-2 flex-1 overflow-x-auto max-h-[300px]">
                {/* Short Description */}
                {post.short_description && (
                  <div
                    className="text-xs sm:text-xl md:text-2xl font-semibold text-gray-800"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {post.short_description}
                  </div>
                )}

                {/* Main Content */}
                <div
                  className="prose prose-lg max-w-none text-[10px] sm:text-base"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </div>
            </div>

            {/* Topics/Tags */}
            {post.post_topics && post.post_topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {post.post_topics.map((topic) => (
                  <span
                    key={topic.id}
                    className="bg-gray-200 px-3 py-1 text-sm text-black hover:bg-gray-300 cursor-pointer"
                    onClick={() => router.push(`/news?topic=${topic.slug}`)}
                  >
                    {topic.title_mn || topic.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Recommended Sidebar - Most Right Side */}
          <div className="w-full sm:w-20 bg-gray-50 overflow-y-auto max-h-[250px] sm:max-h-max">
            {console.log(
              "Rendering sidebar, recommended.length:",
              recommended.length
            )}
            {recommended.length > 0 ? (
              <div className="bg-gray-100 p-4 w-full h-full flex flex-row sm:flex-col gap-4 items-start sm:items-center">
                <h3
                  className="text-xs sm:text-xl font-semibold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠰᠠᠨᠠᠭᠤᠯᠬᠤ ᠮᠡᠳᠡᢉᠡ
                </h3>
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 overflow-x-auto sm:overflow-x-visible">
                  {recommended.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3 cursor-pointer hover:bg-gray-50 transition-colors max-w-10 flex-shrink-0"
                      onClick={() => router.push(`/news/${item.id}`)}
                    >
                      <p
                        className="text-[10px] sm:text-sm font-medium"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                      >
                        {item.title?.length > 60
                          ? `${item.title.substring(0, 60)}...`
                          : item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-red-100 p-4">
                <p>No recommended posts found. Length: {recommended.length}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
