import phoneImg from "/dowanlodR.png";

function DowanlodApp() {
  return (
    <section className="flex flex-col  sm:flex-row gap-5 items-center justify-center sm:bg-red-200  ">
      <div className="w-1/2">
        <img src={phoneImg} alt="logo" />
      </div>
      <div className="sm:w-1/2 ">
        <h1 className="text-3xl text-center">Download</h1>
        <h3 className="text-2xl text-center mb-3">Our New App</h3>
        <p className="text-center sm:text-left">
          "Experience the taste of authenticity with Ladhidh – your go-to app
          for discovering delicious traditional recipes. With an intuitive
          design, explore new culinary ideas, save your favorite dishes, and
          even order exclusive spices. Ladhidh brings the flavors of the world
          to your fingertips."
        </p>
        <div className="text-center bg-red-400 hover:scale-95 py-1 mt-2  rounded-md">
          <a
            href="/ladhidh.apk"
            download={"ladhidh"}
            className="text-sm text-white px-2 py-2 "
          >
            Downlod our app
          </a>
        </div>
      </div>
    </section>
  );
}

export default DowanlodApp;
