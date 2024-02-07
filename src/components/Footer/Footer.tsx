import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="pt-14 mt-14 border-t border-gray-200">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0 md:gap-14">
          <div className="pb-8 text-center md:text-left md:flex-1 md:pb-0 ">
            <h4 className="font-medium text-[24px] pb-3">Contact Us</h4>
            <p className="m-0">
              123 Main Street <br />
              Washington, DC 20001
            </p>
            <div className="flex justify-center py-4 md:justify-start">
              <BsFillSendFill />
              <p className="ml-2">Hotel Hub</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-0000</p>
            </div>
            <div className="flex justify-center pt-4 md:justify-start">
              <BiMessageDetail />
              <p className="ml-2">Hotel Hub</p>
            </div>
          </div>
          <div className="py-8 md:flex-1 text-center md:text-left md:py-0">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Customer Service</p>
            <p className="pb-4">Privacy Commitment</p>
            <p className="pb-4">Terms of Service</p>
            <p>FAQ</p>
          </div>
          <div className="pt-8 md:flex-1 md:pt-0 text-center md:text-left">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-dark flex w-full py-4">
        <div className="container px-4 mx-auto">
          <p className="text-xs">&copy; 2024 Hotel Hub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
