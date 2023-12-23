import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '/bplogo.png';
import { useMediaQuery } from '../util/useMediaQuery';
import { Button } from '@/components/ui/button';
const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: 'beforeChildren',
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
  const matches = useMediaQuery('(min-width:1024px)');

  return (
    <nav className="sticky top-0 z-50 bg-white px-4 md:px-8 lg:px-16 xl:px-32 border-b border-gray-200">
      <div className="z-20">
        <div className="">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="relative">
              <a href="/">
                <img src={logo} className="w-20" />
              </a>
            </div>
            {/* Nav Links */}
            {matches && (
              <div className="flex gap-12">
                <a href="/">
                  <Button variant="link">Home</Button>
                </a>
                <a href="/About">
                  <Button variant="link">About</Button>
                </a>
                <a href="/Services">
                  <Button variant="link">Services</Button>
                </a>
                <a href="/Gallery">
                  <Button variant="link">Gallery</Button>
                </a>
                <a href="/Contact">
                  <Button size="default">Contact</Button>
                </a>
              </div>
            )}
            {/* Hamburger */}
            {!matches && (
              <div
                onClick={() => setToggled((prevToggle) => !prevToggle)}
                className="z-50 cursor-pointer space-y-1.5"
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
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                className="bg-white fixed bottom-0 left-0 flex h-screen w-full items-center justify-center"
              >
                <motion.div
                  variants={navMotion}
                  animate="visible"
                  initial="hidden"
                  className="flex flex-col gap-12 font-light text-2xl items-center justify-center"
                >
                  <motion.a variants={itemMotion} href="/">
                    <Button variant="link">Home</Button>
                  </motion.a>
                  <motion.a variants={itemMotion} href="/About">
                    <Button variant="link">About</Button>
                  </motion.a>
                  <motion.a variants={itemMotion} href="/Services">
                    <Button variant="link">Services</Button>
                  </motion.a>
                  <motion.a variants={itemMotion} href="/Gallery">
                    <Button variant="link">Gallery</Button>
                  </motion.a>
                  <motion.a variants={itemMotion} href="/Contact">
                    <Button className="px-8">Contact</Button>
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
