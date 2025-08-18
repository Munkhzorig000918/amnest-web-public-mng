// Donation Status Check API - Next.js API Route
// Mock implementation for testing donation functionality

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Extract data from request body
    const { invoiceCode } = req.body;

    // Validation
    if (!invoiceCode) {
      return res.status(400).json({
        success: false,
        message: "Invoice code is required",
      });
    }

    // Mock payment status response
    // Simulate payment completion after 30 seconds for testing
    const invoiceCreatedTime =
      parseInt(invoiceCode.split("-")[1]) || Date.now();
    const currentTime = Date.now();
    const timeDiff = currentTime - invoiceCreatedTime;

    const mockStatusData = {
      code: invoiceCode,
      status: timeDiff > 30000 ? "paid" : "pending", // Mark as paid after 30 seconds for demo
      amount: 50000,
      createdAt: new Date(invoiceCreatedTime).toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Return success response
    res.status(200).json({
      success: true,
      message: "Status retrieved successfully",
      payload: mockStatusData,
    });
  } catch (error) {
    console.error("Donation check API Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
}
