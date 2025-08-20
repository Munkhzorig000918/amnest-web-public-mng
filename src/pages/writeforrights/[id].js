import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { actionsService } from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    
    // Fetch action data by ID
    const actionResponse = await actionsService.getActionById(id);
    
    return {
      props: {
        action: actionResponse.data || null,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching action:", error);
    return {
      props: {
        action: null,
        error: "Failed to load action",
      },
    };
  }
}

export default function WriteForRightsDetail({ action, error }) {
  const router = useRouter();
  const { id } = router.query;

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("MN");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set default message when action loads
  useEffect(() => {
    if (action && action.placeholder_message) {
      setMessage(action.placeholder_message);
    }
  }, [action]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingFields = [];
    if (!lastName) missingFields.push("Овог");
    if (!firstName) missingFields.push("Нэр");
    if (!email) missingFields.push("Мэйл хаяг");

    if (missingFields.length > 0) {
      setErrorMessage(`${missingFields.join(", ")} оруулах шаардлагатай.`);
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_USERS_URL}/action/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actionId: parseInt(id),
            firstName,
            lastName,
            email,
            country,
            message: message || action?.placeholder_message || "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormSubmitted(true);
    } catch (error) {
      setErrorMessage("Алдаа гарлаа! Дахин оролдоно уу.");
    }
  };

  // Loading state
  if (!id) {
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
  if (error || !action) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
            </h1>
            <p className="text-gray-600 mb-4">
              ᠲᠠᠯᠪᠢᠭᠰᠠᠨ ᠠᠵᠢᠯ ᠤ᠋ᠯᠠᠭ᠎ᠠ ᠦᠵᠡᠭᠳᠡᠵᠤ ᠴᠢᠳᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ
            </p>
            <button
              onClick={() => router.push("/writeforrights")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              ᠪᠤᠴᠠᠬᠤ
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (formSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#43a6ac]">
          <div className="text-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">Баярлалаа!</h2>
            <p className="text-xl mb-6">
              Таны үйл ажиллагаа амжилттай бүртгэгдлээ
            </p>
            <div className="space-y-4">
              <button
                onClick={() => router.push("/writeforrights")}
                className="bg-white text-[#43a6ac] px-6 py-3 rounded font-bold hover:bg-gray-100 mr-4"
              >
                Бусад үйл ажиллагаа үзэх
              </button>
              <button
                onClick={() => router.push("/")}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-[#43a6ac]"
              >
                Нүүр хуудас руу буцах
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const actionImage = getImageUrl(action.cover) || "/images/no-image-icon.png";

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="slider-cont">
          <div
            className="slider-item h-full w-full bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${actionImage})` }}
          >
            <div className="container mx-auto flex h-full select-none flex-col justify-center"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-[1468px] p-6 xl:flex">
          {/* Desktop Layout */}
          <div className="hidden xl:flex w-full">
            {/* Content */}
            <div className="w-full xl:pr-14">
              <h2 className="mb-4 text-[24px] text-[#262626] dark:text-[#aaa] md:text-[41px]">
                {action.title}
              </h2>
              <p className="mb-10 text-justify text-[18px] md:text-left md:text-[22px]">
                {action.description}
              </p>

              {action.label_problem && (
                <>
                  <h2 className="mb-4 text-[24px] text-[#262626] dark:text-[#aaa] md:text-[41px]">
                    {action.label_problem}
                  </h2>
                  <p className="mb-10 whitespace-pre-line text-justify text-[18px] md:text-left md:text-[20px]">
                    {action.label_action}
                  </p>
                </>
              )}
            </div>

            {/* Form */}
            <div className="mx-auto my-16 h-full w-full max-w-[412px] bg-[#363636] px-4 py-4 sm:px-10">
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <h2 className="text-center text-[22px] text-white">
                  Хүний эрхийн төлөө нэгдэнэ үү!
                </h2>

                <input
                  className="h-[45px] my-4 w-full max-w-[334px] p-[10px] text-black"
                  type="text"
                  placeholder="Овог /Заавал/"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  className="h-[45px] my-4 w-full max-w-[334px] p-[10px] text-black"
                  type="text"
                  placeholder="Нэр /Заавал/"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="h-[45px] my-4 w-full max-w-[334px] p-[10px] text-black"
                  type="email"
                  placeholder="Мэйл хаяг /Заавал/"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <select
                  className="h-[40px] my-4 w-full max-w-[334px] px-2 text-black"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="MN">Mongolia</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="KR">South Korea</option>
                  <option value="RU">Russia</option>
                </select>

                {action.has_message_input && (
                  <textarea
                    className="my-4 w-full max-w-[334px] p-[10px] text-black min-h-[100px]"
                    placeholder="Захидлын агуулга..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                )}

                {errorMessage && (
                  <div className="my-4">
                    <p className="text-[19px] text-[#ff0000]">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="mx-auto my-4 flex w-[300px] justify-center bg-primary py-3 text-[22px] text-black hover:bg-yellow-400"
                >
                  Илгээх
                </button>

                <p className="p-3 text-white text-center text-sm">
                  Таны өгсөн хувийн мэдээллийг бид зөвхөн энэ кампанит ажлын
                  хүрээнд болон танд мэдээлэл илгээхэд хэрэглэнэ
                </p>
              </form>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="xl:hidden">
            <h2 className="mb-4 text-[20px] text-[#262626] dark:text-[#aaa]">
              {action.title}
            </h2>
            <p className="mb-6 text-justify text-[16px]">
              {action.description}
            </p>

            {action.label_problem && (
              <>
                <h3 className="mb-3 text-[18px] text-[#262626] dark:text-[#aaa] font-bold">
                  {action.label_problem}
                </h3>
                <p className="mb-6 whitespace-pre-line text-justify text-[14px]">
                  {action.label_action}
                </p>
              </>
            )}

            {/* Mobile Form */}
            <div className="bg-[#363636] p-4 rounded">
              <form onSubmit={handleSubmit}>
                <h2 className="text-center text-[18px] text-white mb-4">
                  Хүний эрхийн төлөө нэгдэнэ үү!
                </h2>

                <input
                  className="h-[40px] mb-3 w-full p-2 text-black rounded"
                  type="text"
                  placeholder="Овог /Заавал/"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  className="h-[40px] mb-3 w-full p-2 text-black rounded"
                  type="text"
                  placeholder="Нэр /Заавал/"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="h-[40px] mb-3 w-full p-2 text-black rounded"
                  type="email"
                  placeholder="Мэйл хаяг /Заавал/"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <select
                  className="h-[40px] mb-3 w-full px-2 text-black rounded"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="MN">Mongolia</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="KR">South Korea</option>
                  <option value="RU">Russia</option>
                </select>

                {action.has_message_input && (
                  <textarea
                    className="mb-3 w-full p-2 text-black min-h-[80px] rounded"
                    placeholder="Захидлын агуулга..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                )}

                {errorMessage && (
                  <div className="mb-3">
                    <p className="text-[16px] text-[#ff0000]">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary py-3 text-[18px] text-black font-bold hover:bg-yellow-400 rounded"
                >
                  Илгээх
                </button>

                <p className="p-3 text-white text-center text-xs">
                  Таны өгсөн хувийн мэдээллийг бид зөвхөн энэ кампанит ажлын
                  хүрээнд болон танд мэдээлэл илгээхэд хэрэглэнэ
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
