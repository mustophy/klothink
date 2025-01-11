"use client";

import { useState } from "react";

const FAQSection = () => {
  return (
    <div>
      <div className="mb-[60px]">
        <div className="section-header">
          <h1 className="section-title">Questions? We Have Answers.</h1>
          <span className="section-subtitle">FAQ</span>
        </div>
        <p className="section-tagline">
          Dive into a world of fashion innovation at Klothink. Our carefully
          curated collections bring together the latest trends and timeless
          classics, ensuring you find the perfect pieces for every occasion.
        </p>
      </div>
      <div className="gap-x-[30px] grid sm:grid-cols-3">
        <div className="flex flex-col gap-5">
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
        </div>
        <div className="flex flex-col gap-5">
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
        </div>
        <div className="sm:flex flex-col gap-5 hidden">
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
          <SingleFaq />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

const SingleFaq = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 border-white-95 p-6 border rounded-2xl h-fit">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="font-medium text-grey-15">
          Can I modify my order after placing it?
        </p>
        <p className={`text-2xl duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </p>
      </div>
      {isOpen && (
        <div>
          <span className="text-grey-30">
            Ordering is easy! Simply browse our website, add items to your cart,
            and proceed to checkout. Follow the prompts to enter your details
            and complete your purchase.
          </span>
        </div>
      )}
    </div>
  );
};
