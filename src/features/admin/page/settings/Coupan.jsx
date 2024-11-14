import Loader from "../../../../components/Loader";
import CoupanCard from "./CoupanCard";
import SetCoupan from "./SetCoupan";
import useCoupan from "./useCoupan";

function Coupan() {
  const { data: coupans, isPending } = useCoupan();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      <SetCoupan />
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-5 justify-start">
          {coupans?.length > 0 &&
            coupans.map((cpn) => <CoupanCard key={cpn._id} cpn={cpn} />)}
        </div>
      )}
    </section>
  );
}

export default Coupan;
