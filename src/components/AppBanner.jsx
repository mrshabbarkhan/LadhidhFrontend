import { useEffect, useState } from "react";
import appBanner from "/appbanner.jpeg";
import { MdCancel } from "react-icons/md";
import { useLocalStorage } from "../features/auth/LocalStorageContext";

function AppBanner() {
  const [showAd, setShowAd] = useState(false);

  const { user } = useLocalStorage();

  useEffect(() => {
    if (user) {
      setShowAd(false);
    } else setShowAd(true);
  }, [user]);

  return (
    <>
      {showAd && (
        <div className="fixed h-[100vh] inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative ">
            <div className="text-black absolute flex gap-2 items-center right-8 top-5 hover:cursor-pointer">
              <MdCancel onClick={() => setShowAd(false)} className="text-xl" />
            </div>

            <img src={appBanner} alt="banner" />
          </div>
        </div>
      )}
    </>
  );
}

export default AppBanner;
