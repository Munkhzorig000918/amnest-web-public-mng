import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import DonationDesktop from "@/components/donation/DonationDesktop";
import DonationMobile from "@/components/donation/DonationMobile";
import { donationService } from "@/services/userApiService";
import { getCountryByCode } from "@/utils/countryList";

export default function Donation() {
  // Form state
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("MN");

  // Payment states
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);
  const [qpayData, setQpayData] = useState(null);
  const [paid, setPaid] = useState(false);
  const [checkPaid, setCheckPaid] = useState(false);

  // Error handling
  const [fullField, setFullField] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Choose donation amount
  const chooseDonation = (selectedAmount) => {
    setAmount(selectedAmount.toString());
    setFullField(false);
    setErrorMessage("");
  };

  // Handle donation submission
  const handleDonate = async () => {
    let donationAmount = parseInt(amount);
    if (isNaN(donationAmount)) {
      donationAmount = 0;
    }

    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      phoneNumber === ""
    ) {
      setFullField("incomplete");
    } else {
      setIsLoading(true);
      try {
        const response1 = await donationService.createAnonymousDonation({
          amount: donationAmount,
          email: String(email),
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          countryCode: selectedCountryCode,
        });

        if (response1.success && response1.payload) {
          setInvoiceData(response1.payload);

          // Check donation status
          const response2 = await donationService.checkDonationStatus(
            response1.payload.code
          );

          if (response2.success && response2.payload) {
            setCheckPaid("true");
            setInvoiceData(response2.payload);
          }
        } else {
          setErrorMessage(response1.message || "ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ"); // Error occurred
        }
      } catch (error) {
        console.error("Donation error:", error);
        setErrorMessage("ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ"); // Error occurred
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle QPay payment
  const handleQPay = async () => {
    if (!invoiceData) return;

    setIsLoading(true);
    try {
      const qpayResponse = await donationService.createBankQPayDonation({
        invoiceCode: invoiceData.code,
        amount: parseInt(amount),
      });

      if (qpayResponse.success && qpayResponse.payload) {
        setQpayData(qpayResponse.payload);
      } else {
        setErrorMessage(qpayResponse.message || "QPay ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ"); // QPay error
      }
    } catch (error) {
      console.error("QPay error:", error);
      setErrorMessage("QPay ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ"); // QPay error
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to recurring donation
  const navToRecurringDonation = () => {
    // Navigate to recurring donation page
    window.location.href = "/recurring-donation";
  };

  // Check payment status periodically
  useEffect(() => {
    let interval;
    if (checkPaid && invoiceData) {
      interval = setInterval(async () => {
        try {
          const statusResponse = await donationService.checkDonationStatus(
            invoiceData.code
          );
          if (
            statusResponse.success &&
            statusResponse.payload.status === "paid"
          ) {
            setPaid(true);
            setCheckPaid(false);
            clearInterval(interval);
          }
        } catch (error) {
          console.error("Payment check error:", error);
        }
      }, 2000); // Check every 2 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [checkPaid, invoiceData]);

  // Donation props to pass to components
  const donationProps = {
    // Form data
    amount,
    setAmount,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    selectedCountryCode,
    setSelectedCountryCode,

    // Payment states
    isLoading,
    invoiceData,
    qpayData,
    paid,
    checkPaid,

    // Error handling
    fullField,
    errorMessage,

    // Functions
    chooseDonation,
    handleDonate,
    handleQPay,
    navToRecurringDonation,
  };

  return (
    <Layout>
      <DonationDesktop {...donationProps} />
      <DonationMobile {...donationProps} />
    </Layout>
  );
}
