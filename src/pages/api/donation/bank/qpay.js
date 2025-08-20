// QPay Bank Donation API - Next.js API Route
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
    const { invoiceCode, amount } = req.body;

    // Validation
    if (!invoiceCode) {
      return res.status(400).json({
        success: false,
        message: "Invoice code is required",
      });
    }

    // Mock QPay response with sample QR code data
    const mockQPayData = {
      invoice: {
        invoice_id: `qpay-${Date.now()}`,
        qr_text: `qpay:${invoiceCode}:${amount || 50000}`,
        qr_image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", // Sample base64 image
        urls: [
          {
            name: "qpay",
            description: "QPay Payment",
            logo: "https://qpay.mn/logo.png",
            link: `https://qpay.mn/payment/${invoiceCode}`,
          },
        ],
      },
      invoiceCode,
      amount: amount || 50000,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Return success response
    res.status(200).json({
      success: true,
      message: "QPay payment created successfully",
      payload: mockQPayData,
    });
  } catch (error) {

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
