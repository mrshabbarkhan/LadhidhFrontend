import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-black py-8 sm:py-12 mb-10 sm:mb-0 rounded-md mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
          {/* Experience Ladhidh App */}
          <div>
            <h2 className="font-semibold mb-4">
              EXPERIENCE LADHIDH APP ON MOBILE
            </h2>
            <div className="flex flex-col">
              {/* <a href="#" className="mb-2 inline-block text-sm underline">
                App Store 
              </a> */}
              <a href="#" className="inline-block text-sm underline">
                Play Store
              </a>
            </div>
          </div>

          {/* Keep in Touch */}
          {/* <div>
            <h2 className="font-semibold mb-4">KEEP IN TOUCH</h2>
            <div className="flex flex-col">
              <a href="#" className="mb-2 inline-block text-sm">
                Twitter
              </a>
              <a href="#" className="mb-2 inline-block text-sm">
                Facebook
              </a>
              <a href="#" className="inline-block text-sm">
                Instagram
              </a>
            </div>
          </div> */}

          {/* Useful Links */}
          <div>
            <h2 className="font-semibold mb-4">USEFUL LINKS</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={"whyLadhidh"} className="hover:underline">
                  Why Ladhidh?
                </Link>
              </li>

              <li>
                <Link to={"FAQs"} className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"terms-and-conditions"} className="hover:underline">
                  T&C
                </Link>
              </li>
              <li>
                <Link to={"privacy-policy"} className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="font-semibold mb-4">CONTACT US</h2>
            <p className="text-sm mb-2">
              Call:{" "}
              <a href="" className="underline">
                +91 9227088655
              </a>
            </p>
            <p className="text-sm mb-4">
              Email:{" "}
              <a href="mailto:talktous@Ladhidh.com" className="underline">
                contact@ladhidh.in
              </a>
            </p>
            {/* <p className="text-sm">
              Have Security Concern? <br /> Mail us at:{" "}
              <a href="mailto:security@Ladhidh.com" className="underline">
                security@ladhidh.com
              </a>
            </p> */}
          </div>

          {/* Registered Office */}
          <div>
            <h2 className="font-semibold mb-4">REGISTERED OFFICE ADDRESS</h2>
            <address className="text-sm not-italic">
              Ladhidh ,<br />
              Front of GIDC Bus Stand, <br />
              Ankhleshwar, <br />
              Gujrat <br />
            </address>
          </div>
        </div>

        <hr className="my-8 border-primary border-t" />

        {/* Footer Bottom */}
        <div className="text-center text-sm space-y-4">
          <p>&copy; 2024 Ladhidh All Rights Reserved.</p>
          <p className="text-sm ">
            Powered by{" "}
            <a
              href="http://aimfortech.com/"
              target="_blank"
              className="bg-primary p-1 text-white rounded-md"
            >
              Aimfortech
            </a>
            {/* , delivering a delicious e-commerce experience that brings fresh
            flavors to your doorstep with cutting-edge technology." */}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
