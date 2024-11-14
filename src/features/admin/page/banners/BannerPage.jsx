import Loader from "../../../../components/Loader";
import { useState } from "react";
import { useBanners } from "./useBanners";
import { useDeleteBanner } from "./useDeleteBanner";
import Spinner from "../../../../components/Spinner";
import { useAddBaner } from "./useAddBanner";
import { FaTrashCan } from "react-icons/fa6";
import Badge from "../../../../components/Badge";

function BannerPage() {
  const { banners, isPending } = useBanners();
  const { addNewBanner, isPending: addingBanner } = useAddBaner();
  const { removeBanner } = useDeleteBanner();

  const [deletingBannerId, setDeletingBannerId] = useState(null);

  const handleDelete = (id) => {
    setDeletingBannerId(id);
    removeBanner(id, {
      onSettled: () => setDeletingBannerId(null),
    });
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const data = new FormData();
      data.append("photo", selectedFile);
      addNewBanner(data);
    }
  };

  if (isPending) {
    return <Loader className={"h-96"} />;
  }

  return (
    <>
      <span className="text-2xl font-medium relative w-fit mr-3 ">
        Banners <Badge data={banners} className={"left-20 ml-2"} />
      </span>
      <input
        type="file"
        accept="image/*"
        placeholder="Add"
        className="hidden"
        id="fileInput"
        onChange={handleChange}
      />
      <label
        htmlFor="fileInput"
        className=" inline-flex  items-center px-3 py-0.5 mx-2 shadow-md border rounded-md hover:bg-primary-dark hover:text-white cursor-pointer"
      >
        {addingBanner ? <Spinner className="border-white" /> : "Add"}
      </label>

      <div className="flex flex-wrap gap-10 mt-2 ">
        {banners?.map((banner) => (
          <div key={banner._id} className="relative border-2">
            <img className="rounded-md  object-cover" src={banner.Img} alt="" />
            <span className="absolute bottom-2 right-2 flex space-x-2 float-end mt-2">
              <div
                onClick={() => handleDelete(banner._id)}
                className="glassmorphism border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
              >
                {deletingBannerId === banner._id ? (
                  <Spinner />
                ) : (
                  <FaTrashCan className="m-1" />
                )}
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BannerPage;
