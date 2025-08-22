import { useEffect, useRef } from "react";

// Leaflet Map Component for Event Locations
// Based on the old amnesty-web-public LeafletContainer.svelte
export default function LeafletMap({ coordinates, className = "h-[400px]" }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only load Leaflet on client side
    if (typeof window === "undefined") return;

    const initMap = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const L = (await import("leaflet")).default;

        // Fix for default markers in react-leaflet
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        if (mapRef.current && !mapInstanceRef.current) {
          // Extract coordinates from the GeoJSON structure
          let coordinate = null;

          console.log("LeafletMap: Received coordinates:", coordinates);

          if (coordinates?.features?.length > 0) {
            coordinates.features.forEach((feature, index) => {
              console.log(`LeafletMap: Processing feature ${index}:`, feature);
              if (Array.isArray(feature?.geometry?.coordinates)) {
                // Leaflet uses [lat, lng] but GeoJSON uses [lng, lat]
                coordinate = [
                  feature.geometry.coordinates[1], // lat
                  feature.geometry.coordinates[0], // lng
                ];
                console.log(`LeafletMap: Extracted coordinate:`, coordinate);
              }
            });
          }

          // Default to Ulaanbaatar if no coordinates
          if (!coordinate) {
            coordinate = [47.9218, 106.9057]; // Ulaanbaatar coordinates
            console.log("LeafletMap: Using default coordinate:", coordinate);
          }

          console.log("LeafletMap: Creating map with center:", coordinate);

          // Create map
          const map = L.map(mapRef.current, {
            center: coordinate,
            zoom: 15,
          });

          // Add OpenStreetMap tile layer
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            minZoom: 0,
            maxZoom: 20,
            maxNativeZoom: 19,
            attribution: "© OpenStreetMap contributors",
          }).addTo(map);

          // Add markers for each feature
          if (coordinates?.features?.length > 0) {
            coordinates.features.forEach((feature, index) => {
              if (Array.isArray(feature?.geometry?.coordinates)) {
                const [lng, lat] = feature.geometry.coordinates;
                console.log(
                  `LeafletMap: Adding marker ${index} at [${lat}, ${lng}]`
                );
                L.marker([lat, lng]).addTo(map);
              }
            });
          } else {
            // Add default marker
            console.log("LeafletMap: Adding default marker at:", coordinate);
            L.marker(coordinate).addTo(map);
          }

          mapInstanceRef.current = map;
          console.log("LeafletMap: Map initialized successfully");
        }
      } catch (error) {
        console.error("LeafletMap: Error initializing map:", error);
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        console.log("LeafletMap: Cleaning up map");
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates]);

  return (
    <div ref={mapRef} className={className} style={{ minHeight: "400px" }} />
  );
}
