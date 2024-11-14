function Badge({ data, className }) {
  const lengthOfData = data?.length;

  return (
    <span
      className={`p-0.5 text-center absolute -right-5 rounded-full bg-primary text-white text-xs h-5 w-5 ${className}`}
    >
      {lengthOfData}
    </span>
  );
}

export default Badge;
