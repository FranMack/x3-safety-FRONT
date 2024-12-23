import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import logor from "../../public/logo.png";

const links = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Products",
    path: "#products",
  },
  {
    title: "About Us",
    path: "#aboutUs",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-50 bg-backgroundColor text-black py-12 h-[90vh] md:h-[50vh] text-[1.5rem]">
      <div className="w-full h-[80%] flex items-center ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-">
          <div className="flex flex-col items-center justify-start">
            <div className="relative w-[70%] h-[50%]">
              <Image
                fill
                src={logor}
                alt="Company Logo"
                className="absolute h-12 w-auto mb-4 rounded"
              />
            </div>
            <p className="text-gray-400 text-[1.4rem]">
              Creating innovative solutions for a better tomorrow.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start gap-y-[1vh] ">
            <h3 className="text-[1.8rem] font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-3 ">
              <FaPhone className="mr-2 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="mr-2 text-primary" />
              <span>info@company.com</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook className="text-primary" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter className="text-primary" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-primary" size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-y-[1vh]">
            <h3 className="text-[1.8rem] font-bold mb-4">Address</h3>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1 text-primary" />
              <p className="text-gray-400">
                123 Business Street
                <br />
                Suite 100
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-y-[1vh]">
            <h3 className="text-[1.8rem] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((item) => {
                return (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center h-[20%]">
        <p className="text-gray-400 text-[1.4rem]">
          © {new Date().getFullYear()} X3 Safety. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
