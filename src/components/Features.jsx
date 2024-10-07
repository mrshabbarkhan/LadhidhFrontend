function Features() {
  const data = [
    {
      heading: "Only the Best for You",
      description:
        "Every cut of meat we sell is carefully handpicked by a team with years of experience. If it’s not up to our standards, we won’t put it on your plate.",
    },
    {
      heading: "Freshness Guaranteed",
      description:
        "From the moment we procure it to the moment it arrives at your doorstep, your meat is kept at an optimal temperature to lock in freshness and flavor. We’re obsessed with ensuring your meat stays chilled, juicy, and full of natural goodness.",
    },
    {
      heading: "Honest Pricing",
      description:
        "You only pay for what you eat. Unlike others, we charge you for the actual meat you take home, not the parts that aren’t fit to eat.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 bg-red-100 py-10 px-3 rounded-md mb-2">
      {data.map((dt, idx) => (
        <div key={idx} className="mb-2">
          <div className="bg-primary w-10 h-1 rounded-xl"></div>
          <h1 className="my-3 font-semibold text-sm">{dt.heading}</h1>
          <p className="text-sm leading-8">{dt.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
