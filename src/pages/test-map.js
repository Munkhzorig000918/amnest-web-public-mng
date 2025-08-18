import InteractiveMap from "@/components/participation/InteractiveMap";

export default function TestMap() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Interactive Mongolia Map Test
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <InteractiveMap />
        </div>
        <div id="fill-info" className="mt-8 p-6 bg-blue-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Form Section</h2>
          <p>
            This is where the form would be. The interactive map should scroll
            to this section when you click &quot;мэдээлэл оруулах&quot; on any
            province.
          </p>
        </div>
      </div>
    </div>
  );
}
