import { motion } from "framer-motion";
import { useState } from "react";
import logo from "/bplogo.png";
import { useMediaQuery } from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <nav className="sticky top-0 z-50">
      <div className="z-20">
        <div className="mb-12 md:mx-16 lg:mx-32">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative">
              <a href="/">
                <img src={logo} className="w-20 lg:w-32" />
              </a>
            </div>
            {/* Nav Links */}
            {matches && (
              <div className="flex gap-12">
                <a href="/">Home</a>
                <a href="/about/">About</a>
                <a href="/services/">Services</a>
                <a href="/gallery/">Gallery</a>
                <a href="/contact/">Contact</a>
              </div>
            )}
            {/* Hamburger */}
            {!matches && (
              <div
                onClick={() => setToggled((prevToggle) => !prevToggle)}
                className="z-50 cursor-pointer space-y-1.5 px-4"
              >
                <motion.span
                  animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                  className="bg-black block h-0.5 w-8"
                ></motion.span>
                <motion.span
                  animate={{ width: toggled ? 0 : 24 }}
                  className="bg-black block h-0.5 w-6"
                ></motion.span>
                <motion.span
                  animate={{
                    rotateZ: toggled ? -45 : 0,
                    y: toggled ? -8 : 0,
                    width: toggled ? 32 : 16,
                  }}
                  className="bg-black block h-0.5 w-4"
                ></motion.span>
              </div>
            )}
            {/* Fixed Nav */}
            {toggled && !matches && (
              <div className="bg-white flex fixed bottom-0 left-0 flex h-screen w-full items-center justify-center">
                <motion.div
                  variants={navMotion}
                  animate="visible"
                  initial="hidden"
                  className="flex flex-col gap-12"
                >
                  <motion.a variants={itemMotion} href="/">
                    Home
                  </motion.a>
                  <motion.a variants={itemMotion} href="/about/">
                    About
                  </motion.a>
                  <motion.a variants={itemMotion} href="/services/">
                    Services
                  </motion.a>
                  <motion.a variants={itemMotion} href="/gallery/">
                    Gallery
                  </motion.a>
                  <motion.a variants={itemMotion} href="/contact/">
                    Contact
                  </motion.a>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
