import React from "react";

const WhyLadhidh = () => {
  const reasons = [
    {
      title: "Quality Assurance",
      description:
        "We ensure the highest quality of meat by sourcing from trusted suppliers and conducting regular quality checks.",
    },
    {
      title: "Freshness Guaranteed",
      description:
        "Our meats are delivered fresh daily, ensuring that you receive the best product every time you shop.",
    },
    {
      title: "Wide Variety",
      description:
        "We offer a diverse range of meat options including organic, grass-fed, and specialty meats to cater to all your culinary needs.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our priority. We are dedicated to providing exceptional customer service and support.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We are committed to sustainable farming practices, ensuring that our operations are environmentally friendly.",
    },
    {
      title: "Convenient Shopping",
      description:
        "Shop effortlessly online or in-store with flexible payment and delivery options tailored to your convenience.",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-5xl mx-auto p-8 ">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Why Choose Ladhidh?
      </h1>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <h2 className="text-xl font-semibold text-primary">
              {reason.title}
            </h2>
            <p className="text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLadhidh;
