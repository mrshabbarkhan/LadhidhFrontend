import Spinner from "./Spinner";

const SubmitButton = ({ isPending, label, isDisabled }) => (
  <button
    type="submit"
    style={{ cursor: isPending ? "not-allowed" : "pointer" }}
    disabled={isDisabled}
    className={`w-full py-2 text-white rounded-lg font-semibold flex items-center justify-center gap-2 ${
      isPending ? "bg-red-200" : "hover:bg-primary-dark bg-primary"
    }`}
  >
    {isPending && <Spinner className="border-white" />} {label}
  </button>
);

export default SubmitButton;
