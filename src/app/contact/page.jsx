import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


export default function ContactUsPage() {
    return (
      <div  className="h-screen flex flex-col text-3l items-center justify-center text font-bold h-21 pt-21 py-7 px-7 mx-auto p-6">
{/* 
        <span className="m-3 py-3 px-3">If you have inquiries or need assistance, do not hesitate to chat with us. <br />We are available Monday to Sunday (8am to 7pm). <br />Public Holidays between 9am and 5pm.</span> <br /> <br /> */}
        <div>
        <HiOutlineMailOpen />
        <p className="bg-yellow-300 my-2"> uniglobaltheater@movies.com</p>  <br />

        <BsTelephone />
        <p className="bg-yellow-300 my-2">+2348123456789, +2349874561230</p> <br /> <br />

        <p className="bg-yellow-300 my-2  flex flex-row">Follow us

        </p>
        
        <div className="flex flex-row gap-7">
        <FaSquareWhatsapp />
        <FaSquareXTwitter /> 
        <FaInstagram />
        <FaTiktok />
        <FaTelegramPlane />

        </div>


        </div> <br />

      </div>
      
 
    )
  }
  