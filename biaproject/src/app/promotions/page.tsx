// promotions/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router

const PromotionPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const validPromoCode = "BIA20"; // This should be updated every two weeks

  const handleApplyPromo = () => {
    if (promoCode === validPromoCode) {
      // Redirect to the shop page with the promo code
      router.push(`/shop?promo=${promoCode}`);
    } else {
      setErrorMessage("Invalid promo code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Enter Your Promo Code</h1>
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        className="p-4 rounded bg-white text-black mb-4"
        placeholder="Enter promo code"
      />
      <button onClick={handleApplyPromo} className="bg-red-500 text-white py-2 px-6 rounded">
        Apply Promo
      </button>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default PromotionPage; 
