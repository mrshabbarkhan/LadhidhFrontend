import phoneImg from "/downalod.jpeg";
import playStore from "/pngegg.png";
import qr from "/qr.svg";

function DowanlodApp() {
  return (
    <section className="flex flex-col  sm:flex-row gap-5 items-center justify-center sm:bg-red-200  ">
      <div className="w-1/2">
        <img src={phoneImg} alt="logo" />
      </div>
      <div className="sm:w-1/2 ">
        <h1 className="text-3xl text-center">Dowanlod</h1>
        <h3 className="text-2xl text-center mb-3">Our New App</h3>
        <p className="text-center sm:text-left">
          "Experience the taste of authenticity with Ladhidh – your go-to app
          for discovering delicious traditional recipes. With an intuitive
          design, explore new culinary ideas, save your favorite dishes, and
          even order exclusive spices. Ladhidh brings the flavors of the world
          to your fingertips."
        </p>
        <div className="flex items-center justify-center gap-10 mt-5">
          <img className="h-20" src={qr} alt="" />
          <img className="h-20" src={playStore} alt="" />
        </div>
      </div>
    </section>
  );
}

export default DowanlodApp;
