import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGetActionsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function WriteForRightsDesktop() {
  const router = useRouter();

  // Fetch actions for Write for Rights campaigns
  const {
    data: actionsData,
    error: actionsError,
    isLoading: actionsLoading,
  } = useGetActionsQuery({
    populate: "*",
    sort: "createdAt:desc",
    // Filter for active actions with end dates
    filters: {
      $or: [
        { end_date: { $notNull: true } },
        { end_date: { $gte: new Date().toISOString().split("T")[0] } },
      ],
    },
  });

  // Form state
  const [selectedItems, setSelectedItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("MN");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle checkbox changes
  const handleCheckboxChange = (actionId, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, actionId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== actionId));
    }
  };

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
      // Submit each selected action
      for (const actionId of selectedItems) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_USERS_URL}/action/submit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              actionId,
              firstName,
              lastName,
              email,
              country,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Submission failed");
        }
      }

      setFormSubmitted(true);
    } catch (error) {
      setErrorMessage("Алдаа гарлаа! Дахин оролдоно уу.");
    }
  };

  // Initialize selected items when data loads
  useState(() => {
    if (actionsData) {
      setSelectedItems(actionsData.map((action) => action.id));
    }
  }, [actionsData]);

  // Loading state
  if (actionsLoading) {
    return (
      <div className="hidden sm:flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (actionsError) {
    return (
      <div className="hidden sm:flex items-center justify-center p-8">
        <div className="text-center text-red-600">
          <p>ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ</p>
        </div>
      </div>
    );
  }

  if (formSubmitted) {
    return (
      <div className="hidden sm:flex items-center justify-center min-h-[400px] bg-[#43a6ac]">
        <div className="text-center text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Баярлалаа!</h2>
          <p className="text-xl mb-6">
            Таны үйл ажиллагаа амжилттай бүртгэгдлээ
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-white text-[#43a6ac] px-6 py-3 rounded font-bold hover:bg-gray-100"
          >
            Нүүр хуудас руу буцах
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden sm:grid min-h-[745px] w-full bg-[#43a6ac] lg:flex">
      {/* Actions List */}
      <div className="grid w-full gap-4 overflow-scroll p-4 lg:w-[63%]">
        <p className="max-w-max bg-black p-1 text-[24px] text-white">
          "Эрхийнхээ төлөө бичицгээе" аянд нэгдэнэ үү
        </p>
        <p className="text-[20px] text-white">
          Бид хамтдаа тэмцвэл илүү хүчтэй. Эрхийнхээ төлөө бичицгээе аяны гол
          хөдөлгөгч хүч юм. Яг одоо үйл ажиллагаанд нэгдэж, өөрчлөлт хийцгээе
        </p>

        {actionsData?.map((action) => (
          <div key={action.id} className="flex w-full bg-white">
            <div className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] overflow-hidden">
              <Image
                src={getImageUrl(action.cover) || "/images/no-image-icon.png"}
                alt={action.title}
                width={150}
                height={150}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/no-image-icon.png";
                }}
              />
            </div>

            <div className="h-[120px] w-full p-4">
              <p className="hidden text-black sm:block font-bold">
                {action.title}
              </p>
              <p className="h-[70px] overflow-hidden sm:h-[60px] sm:text-[20px] md:h-[70px] md:text-[24px] text-gray-700">
                {action.description}
              </p>
              <button
                onClick={() => router.push(`/writeforrights/${action.id}`)}
                className="bg-[#e4e4e4] p-1 text-[12px] uppercase hover:bg-gray-300"
              >
                <span className="text-[#525252]">Дэлгэрэнгүй</span>
              </button>
            </div>

            <div className="flex h-full items-center justify-center">
              <label className="m-2 mr-4">
                <input
                  className="h-[25px] w-[25px] accent-gray-500 sm:h-[45px] sm:w-[45px]"
                  type="checkbox"
                  checked={selectedItems.includes(action.id)}
                  onChange={(e) =>
                    handleCheckboxChange(action.id, e.target.checked)
                  }
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="w-full bg-[#1b4244] lg:w-[37%]">
        <form
          className="flex flex-col items-center bg-[#1b4244] py-10"
          onSubmit={handleSubmit}
        >
          <h2 className="w-[300px] text-center text-[22px] uppercase text-white">
            Хүний эрхийн төлөө нэгдэнэ үү
          </h2>

          <input
            className="h-[45px] my-4 w-full max-w-[334px] p-[10px]"
            type="text"
            placeholder="Овог /Заавал/"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className="h-[45px] my-4 w-full max-w-[334px] p-[10px]"
            type="text"
            placeholder="Нэр /Заавал/"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="h-[45px] my-4 w-full max-w-[334px] p-[10px]"
            type="email"
            placeholder="Мэйл хаяг /Заавал/"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="my-4">
            <select
              className="h-[40px] w-full max-w-[334px] px-2"
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
          </div>

          {errorMessage && (
            <div className="my-4 w-full max-w-[334px]">
              <p className="text-[19px] text-[#ff0000]">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            className="mx-auto my-4 flex w-[300px] justify-center bg-primary py-3 text-[22px] hover:bg-yellow-400 transition-colors"
          >
            Илгээх
          </button>
        </form>
      </div>
    </div>
  );
}
