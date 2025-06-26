import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGetActionsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function WriteForRightsMobile() {
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
      <div className="flex sm:hidden items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600 text-sm">ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (actionsError) {
    return (
      <div className="flex sm:hidden items-center justify-center p-4">
        <div className="text-center text-red-600">
          <p className="text-sm">ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ</p>
        </div>
      </div>
    );
  }

  if (formSubmitted) {
    return (
      <div className="flex sm:hidden items-center justify-center min-h-[400px] bg-[#43a6ac] p-4">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Баярлалаа!</h2>
          <p className="text-lg mb-6">
            Таны үйл ажиллагаа амжилттай бүртгэгдлээ
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-white text-[#43a6ac] px-4 py-2 rounded font-bold hover:bg-gray-100 text-sm"
          >
            Нүүр хуудас руу буцах
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex sm:hidden flex-col min-h-[600px] w-full bg-[#43a6ac]">
      {/* Header */}
      <div className="p-4">
        <p className="bg-black p-2 text-[18px] text-white mb-4 inline-block">
          "Эрхийнхээ төлөө бичицгээе" аянд нэгдэнэ үү
        </p>
        <p className="text-[16px] text-white mb-4">
          Бид хамтдаа тэмцвэл илүү хүчтэй. Эрхийнхээ төлөө бичицгээе аяны гол
          хөдөлгөгч хүч юм. Яг одоо үйл ажиллагаанд нэгдэж, өөрчлөлт хийцгээе
        </p>
      </div>

      {/* Actions List */}
      <div className="flex-1 overflow-y-auto px-4">
        {actionsData?.map((action) => (
          <div key={action.id} className="flex w-full bg-white mb-3 rounded">
            <div className="h-[80px] w-[80px] overflow-hidden rounded-l">
              <Image
                src={getImageUrl(action.cover) || "/images/no-image-icon.png"}
                alt={action.title}
                width={80}
                height={80}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/no-image-icon.png";
                }}
              />
            </div>

            <div className="flex-1 p-3">
              <p className="text-black font-bold text-sm mb-1 line-clamp-1">
                {action.title}
              </p>
              <p className="text-gray-700 text-xs mb-2 line-clamp-2">
                {action.description}
              </p>
              <button
                onClick={() => router.push(`/writeforrights/${action.id}`)}
                className="bg-[#e4e4e4] px-2 py-1 text-[10px] uppercase hover:bg-gray-300 rounded"
              >
                <span className="text-[#525252]">Дэлгэрэнгүй</span>
              </button>
            </div>

            <div className="flex items-center justify-center p-2">
              <label>
                <input
                  className="h-[20px] w-[20px] accent-gray-500"
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
      <div className="bg-[#1b4244] p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-[18px] uppercase text-white mb-4">
            Хүний эрхийн төлөө нэгдэнэ үү
          </h2>

          <input
            className="h-[40px] mb-3 w-full p-2 rounded text-sm"
            type="text"
            placeholder="Овог /Заавал/"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className="h-[40px] mb-3 w-full p-2 rounded text-sm"
            type="text"
            placeholder="Нэр /Заавал/"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="h-[40px] mb-3 w-full p-2 rounded text-sm"
            type="email"
            placeholder="Мэйл хаяг /Заавал/"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="h-[40px] mb-3 w-full px-2 rounded text-sm"
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

          {errorMessage && (
            <div className="mb-3">
              <p className="text-[16px] text-[#ff0000]">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary py-3 text-[18px] font-bold hover:bg-yellow-400 transition-colors rounded"
          >
            Илгээх
          </button>
        </form>
      </div>
    </div>
  );
}
