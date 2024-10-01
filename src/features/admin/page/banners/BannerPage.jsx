import Loader from "../../../../components/Loader";
import { useState } from "react";
import { useBanners } from "./useBanners";
import { useDeleteBanner } from "./useDeleteBanner";
import Spinner from "../../../../components/Spinner";
import { useAddBaner } from "./useAddBanner";

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
      <span className="text-2xl font-medium">Banners</span>
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
        className="bg-primary inline-flex items-center px-3 py-0.5 mx-2 rounded-full hover:bg-primary-dark text-white cursor-pointer"
      >
        {addingBanner ? <Spinner className="border-white" /> : "Add"}
      </label>

      <div className="flex flex-wrap gap-10 mt-2 ">
        {banners
          ?.map((banner) => (
            <div key={banner._id} className="relative">
              <img className="rounded-md h-40 w-80" src={banner.Img} alt="" />
              <span className="absolute bottom-2 right-2 flex space-x-2 float-end mt-2">
                <div
                  onClick={() => handleDelete(banner._id)}
                  className="bg-white border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
                >
                  {deletingBannerId === banner._id ? ( 
                    <Spinner />
                  ) : (
                    <i className="fa fa-trash-alt"></i>
                  )}
                </div>
              </span>
            </div>
          ))
          .reverse()}
      </div>
    </>
  );
}

export default BannerPage;
