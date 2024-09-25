const Spinner = ({className="border-primary"}) => {
  return (
    <button className="group text-sm font-semibold  rounded-lg hover:text-white  transition flex items-center">
      <div className={`h-5 w-5  border-2 ${className} border-t-transparent rounded-full animate-spin transition group-hover:border-white group-hover:border-t-transparent`}></div>
    </button>
  );
};

export default Spinner;
