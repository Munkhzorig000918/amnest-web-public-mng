import { useState } from "react";
import Layout from "@/components/layout/Layout";
import WriteForRightsActionDesktop from "@/components/campaign/writeforrights/WriteForRightsActionDesktop";
import WriteForRightsActionMobile from "@/components/campaign/writeforrights/WriteForRightsActionMobile";

export default function TestWriteForRights() {
  const [selectedActionId, setSelectedActionId] = useState("1");

  const actionIds = ["1", "2", "3"];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Test Controls */}
        <div className="max-w-4xl mx-auto mb-8 bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">
            Write for Rights Action Detail Test Page
          </h1>
          <p className="text-gray-600 mb-4">
            Test the write for rights action detail page with different action
            IDs. This page uses mock data and doesn't require API calls.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <label className="font-semibold">Select Action ID:</label>
            <div className="flex gap-2">
              {actionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => setSelectedActionId(id)}
                  className={`px-4 py-2 rounded ${
                    selectedActionId === id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Action {id}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded">
            <h3 className="font-semibold mb-2">Testing Instructions:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Click different action IDs to test different content</li>
              <li>Resize your browser window to test responsive behavior</li>
              <li>Test form submission (it will show success message)</li>
              <li>Test form validation by leaving fields empty</li>
              <li>Check vertical text orientation for Mongolian script</li>
            </ul>
          </div>
        </div>

        {/* Test the Components */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Desktop Version */}
            <div className="hidden sm:block">
              <div className="bg-gray-200 p-2 text-center text-sm font-semibold">
                Desktop Version (sm and above)
              </div>
              <WriteForRightsActionDesktop actionId={selectedActionId} />
            </div>

            {/* Mobile Version */}
            <div className="sm:hidden">
              <div className="bg-gray-200 p-2 text-center text-sm font-semibold">
                Mobile Version (below sm)
              </div>
              <WriteForRightsActionMobile actionId={selectedActionId} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
