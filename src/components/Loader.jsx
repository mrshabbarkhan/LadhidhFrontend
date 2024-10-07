import { TbLoader2 } from "react-icons/tb";

function Loader({ className }) {
  // return (
  //
  //     <div className="three-body">
  //       <div className="three-body__dot"></div>
  //       <div className="three-body__dot"></div>
  //       <div className="three-body__dot"></div>
  //     </div>
  //     </div>
  //   );

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <TbLoader2 className={`text-3xl text-primary animate-spin `} />
    </div>
  );
}

export default Loader;
