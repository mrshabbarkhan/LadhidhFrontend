import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of meat do you offer?",
      answer:
        "At Ladhidh Meat Shop, we offer a wide variety of fresh meats including beef, lamb, chicken, and specialty meats. All our products are sourced from trusted suppliers.",
    },
    {
      question: "Are your meats organic?",
      answer:
        "Yes, we provide organic meat options that are hormone and antibiotic-free. Please check our labels for more details.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website or by visiting our store. For online orders, simply add items to your cart and follow the checkout process.",
    },
    {
      question: "Do you offer home delivery?",
      answer:
        "Yes, we offer home delivery services in selected areas. You can check the delivery options at checkout.",
    },
    {
      question: "What is your return policy?",
      answer:"No Return Policy"    },
    {
      question: "How do you ensure the quality of your meat?",
      answer:
        "We have strict quality control measures in place, including regular inspections and sourcing from certified suppliers to ensure the highest quality meat.",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() =>
                document
                  .getElementById(`faq-${index}`)
                  .classList.toggle("hidden")
              }
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="text-blue-500">
                {/* Icon or chevron here */}
              </span>
            </button>
            <p id={`faq-${index}`} className="hidden mt-2 text-gray-700">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
