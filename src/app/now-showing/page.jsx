import { RiMovie2Fill } from "react-icons/ri";

export default function NowShowingPage() {
    return (
      <div  className=" h-screen flex flex-col text-3l items-center justify-center text font-bold">
        <h1 className="text-3xl items-center justify-center uppercase font-bold font-sans bg-cover px-5"></h1>  <br />

        <p className="bg-yellow-300 ">For bookings and reservations, call: +2345678912345 or +23412345678</p>
          <ul className="py-8">
            <li > <RiMovie2Fill /> Cat Diamond @ N14,700 (Saturdays): 6:30pm</li> <br />
            <li> <RiMovie2Fill /> Cat Gold @ N22,500 (Fridays): 8:30pm</li> <br />
            <li> <RiMovie2Fill /> Cat Silver @ N18,700 (Saturdays): 6:30pm</li>
          </ul>
      </div>
 
    )
  }
  