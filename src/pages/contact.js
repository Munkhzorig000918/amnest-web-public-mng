import { useState } from "react";
import userApiService from "@/services/userApiService";

export default function Contact() {
  const [formData, setFormData] = useState({
    contactType: 1,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const contactTypes = [
    {
      id: 1,
      label: "Хүний эрхийн асуудлаар өргөдөл гомдол гаргах",
    },
    {
      id: 2,
      label: "Сайн дурын ажил, дадлага, гишүүнээр элсэхтэй холбоотой асуудлаар",
    },
    {
      id: 3,
      label: "Хүний эрхийн асуудлаар хамтран ажиллах талаар",
    },
    {
      id: 4,
      label: "Хүний эрхийн сургалт авах",
    },
    {
      id: 5,
      label: "Бусад асуудлаар",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || !isFormValid()) return;

    setLoading(true);
    try {
      await userApiService.contact.submitContactRequest({
        contactType: formData.contactType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setSubmitted(true);
      setMessage(
        "Таны хүсэлт амжилттай илгээгдлээ. Бид тантай удахгүй холбогдох болно."
      );

      // Reset form
      setFormData({
        contactType: 1,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Хүсэлт илгээхэд алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() && formData.email.trim() && formData.message.trim()
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Холбоо барих</h1>

        {message && (
          <div
            className={`mb-6 p-4 rounded ${
              submitted
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">
              Холбогдох шалтгаан*:
            </label>
            <select
              name="contactType"
              value={formData.contactType}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 p-3 rounded-md text-black"
            >
              {contactTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Нэр*:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 p-3 rounded-md"
              placeholder="Та нэрээ оруулна уу"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">И-мэйл*:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 p-3 rounded-md"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Утасны дугаар:
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 p-3 rounded-md"
              placeholder="99123456"
              maxLength="8"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Мессеж*:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-2 border-gray-300 p-3 rounded-md h-32"
              placeholder="Та мессежээ энд бичнэ үү..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid() || loading}
            className={`w-full py-3 px-6 text-lg font-medium rounded-md ${
              isFormValid() && !loading
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "Илгээж байна..." : "Илгээх"}
          </button>
        </form>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Холбоо барих мэдээлэл</h2>
          <div className="space-y-2">
            <p>
              <strong>Хаяг:</strong> Монгол улс, Улаанбаатар хот
            </p>
            <p>
              <strong>Утас:</strong> +976 11 123456
            </p>
            <p>
              <strong>И-мэйл:</strong> info@amnesty.mn
            </p>
            <p>
              <strong>Ажлын цаг:</strong> Даваа - Баасан 09:00-18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
