import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      
      <a
        href="https://www.linkedin.com/in/surya211006/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="bg-blue-500" />
      </a>
        <a
    href="https://github.com/suryapratap64"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={24}  />
  </a>
  
<a
  href="https://leetcode.com/u/sps64044/"
  target="_blank"
  rel="noopener noreferrer"
>
  <SiLeetcode size={24} color="#FFA116" />
</a>
<a
    href="https://www.codechef.com/users/suryaiit001"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SiCodechef size={24} color="#5B4638" />
  </a>
   <a
    href="https://codeforces.com/profile/sps64044"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SiCodeforces size={24} color="#1F8ACB" />
  </a>
    </footer>
  );
};

export default Footer;