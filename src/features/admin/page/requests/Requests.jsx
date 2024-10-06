import { useRequest } from "./useRequest";

function Requests() {
  const { allRequests } = useRequest();
  console.log(allRequests);
  return <div>re</div>;
}

export default Requests;
