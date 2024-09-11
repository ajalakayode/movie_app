import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function ContactUsPage() {
    return (
      <div  className="h-screen flex flex-col text-3l items-center justify-center text font-bold h-21 pt-21 py-7 px-7">
        <div>
        <HiOutlineMailOpen />
        <p className="bg-yellow-300"> uniglobaltheater@movies.com</p>  <br />

        
        <BsTelephone />
        <p className="bg-yellow-300">+2348123456789, +2349874561230</p> <br /> <br />


          <p className="bg-yellow-300">We value and appreciate your response, this will enable us serve you better</p>
          <form>
            <fieldset>
              <label for="textInput" >
              <textarea id="textInput" name="textInput" placeholder="Enter your full name: "></textarea>
              </label>

              <label for="textInput" >
              <textarea id="textInput" name="textInput" placeholder="Enter your email: "></textarea>
              </label>

              <label for="textInput" >
              <textarea id="textInput" name="textInput" placeholder="Share your experience: "></textarea>
              </label>

              <label for="textInput" >
              <textarea id="textInput" name="textInput"  placeholder="How can we improve your experience: "></textarea>
              </label> <br /> <br/>

              <h2 className="bg-yellow-300">Follow us</h2> <br/>
              <li  className="flex justify-around align-items padding 10px rounded-full">
              <IoLogoLinkedin /> <FaXTwitter />
              <FaWhatsapp />
              <FaInstagram />
              <FaFacebook />

              </li>

            </fieldset>

          </form>

        </div> <br />
      </div>
 
    )
  }
  