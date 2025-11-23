import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
        <footer className=" pt-8 w-full text-gray-300">
          <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
            <div className="md:max-w-96">
              <div className="font-bold text-xl bg-gray-300 text-black md:w-28 w-28 text-center py-2">
                LOGO
              </div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-10 md:gap-40">
              <div>
                <h2 className="font-semibold mb-5">Lorem Ipsum</h2>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-5">Lorem Ipsum</h2>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-5">Lorem Ipsum</h2>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-5">Get in touch</h2>
                <div className="text-sm space-y-2">
                  <p>+91-6393274099</p>
                  <p>Dp2072000@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-4 text-center text-sm pb-5">
            Copyright {new Date().getFullYear()} ©{" "}
            <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
