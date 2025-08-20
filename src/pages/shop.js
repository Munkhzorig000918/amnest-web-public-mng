import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ShopDesktop from "@/components/shop/ShopDesktop";
import ShopMobile from "@/components/shop/ShopMobile";
import { merchService } from "@/services/apiService";

export default function Shop() {
  const [merchandise, setMerchandise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        setLoading(true);
        const response = await merchService.getMerchandises({
          pageSize: 50, // Get more items for the shop
        });
        setMerchandise(response || []);
      } catch (err) {
        setError(err.message || "Failed to fetch merchandise");
      } finally {
        setLoading(false);
      }
    };

    fetchMerchandise();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="h-full flex items-center justify-center">
          <div
            className="text-lg"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ...
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="h-full flex items-center justify-center">
          <div
            className="text-lg text-red-500"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ: {error}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ShopDesktop merchandise={merchandise} />
      <ShopMobile merchandise={merchandise} />
    </Layout>
  );
}
