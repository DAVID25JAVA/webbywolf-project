"use client";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="pt-8 w-full text-gray-300"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10"
          >
            <motion.div variants={fadeUp} className="md:max-w-96">
              <div className="font-bold text-xl bg-gray-300 text-black md:w-28 w-28 text-center py-2">
                LOGO
              </div>
            </motion.div>

            <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-10 md:gap-40">
              {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((title, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <h2 className="font-semibold mb-5">{title}</h2>
                  <ul className="text-sm space-y-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <h2 className="font-semibold mb-5">Get in touch</h2>
                <div className="text-sm space-y-2">
                  <p>+91-6393274099</p>
                  <p>Dp2072000@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="pt-4 text-center text-sm pb-5"
          >
            Copyright {new Date().getFullYear()} ©{" "}
            <a  >PrebuiltUI</a>. All Right Reserved.
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
}

export default Footer;
