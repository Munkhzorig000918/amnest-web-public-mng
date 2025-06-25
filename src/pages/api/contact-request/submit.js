// Contact Request Submit API - Next.js API Route
// Handles contact form submissions with validation and email functionality

import nodemailer from "nodemailer";

// Contact types mapping (same as frontend)
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

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Get forward email address based on contact type
const getForwardEmailAddress = (type) => {
  switch (type) {
    case 1:
      return "amarzaya.g@amnesty.mn";
    case 4:
      return "tergel.batnyam@amnesty.mn";
    default:
      return "members@amnesty.mn";
  }
};

// Validation helper
const validateContactData = (body) => {
  const errors = [];

  if (
    !body.name ||
    typeof body.name !== "string" ||
    body.name.trim().length === 0
  ) {
    errors.push("Name is required");
  }

  if (!body.email || typeof body.email !== "string") {
    errors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      errors.push("Valid email is required");
    }
  }

  if (
    !body.message ||
    typeof body.message !== "string" ||
    body.message.trim().length === 0
  ) {
    errors.push("Message is required");
  }

  if (!body.contactType || typeof body.contactType !== "number") {
    errors.push("Contact type is required");
  } else {
    const validContactType = contactTypes.find(
      (type) => type.id === body.contactType
    );
    if (!validContactType) {
      errors.push("Invalid contact type");
    }
  }

  return errors;
};

// Main API handler
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
    const { name, email, phone, message, contactType } = req.body;

    // Validate input data
    const validationErrors = validateContactData(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    // Find contact type label
    const contactTypeObj = contactTypes.find((type) => type.id === contactType);
    const contactTypeLabel = contactTypeObj.label;

    // Get forward email address
    const forwardEmailAddress = getForwardEmailAddress(contactType);

    // Create email content
    const emailSubject = `Contact request received - ${contactTypeLabel}`;
    const emailContent = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Contact Type:</strong> ${contactTypeLabel}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px; background-color: #f5f5f5; border-left: 4px solid #007bff;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <hr>
      <p><small>This message was sent from the Amnesty website contact form.</small></p>
    `;

    // Send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: forwardEmailAddress,
          subject: emailSubject,
          html: emailContent,
          replyTo: email,
        });

        console.log(`Contact email sent to ${forwardEmailAddress}`);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the entire request if email fails
      }
    }

    // In a real implementation, you would also save to database here
    // For now, we'll just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      contactType: contactTypeLabel,
      message: message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    });

    // Return success response
    res.status(200).json({
      success: true,
      message:
        "Таны хүсэлт амжилттай илгээгдлээ. Бид тантай удахгүй холбогдох болно.",
      data: {
        id: Date.now(), // In real implementation, this would be the database ID
        name,
        email,
        contactType: contactTypeLabel,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    res.status(500).json({
      success: false,
      message: "Хүсэлт илгээхэд алдаа гарлаа",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
}
