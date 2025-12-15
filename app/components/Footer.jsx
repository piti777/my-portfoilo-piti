import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Logo from "./Logo";

const footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center flex items-center flex-col gap-2 pt-12">
        <Logo isDarkMode={isDarkMode} />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          Flukeaaaa@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> 2025 Phiti . All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/piti777">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/fluke._flix/">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/forfluke.look/">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
