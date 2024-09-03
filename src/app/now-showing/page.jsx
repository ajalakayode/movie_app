import { RiMovie2Fill } from "react-icons/ri";

export default function NowShowingPage() {
    return (
      <div  className=" h-screen flex flex-col text-3l items-center justify-center text font-bold">
        <h1 className="bg-red-600 text-3xl items-center justify-center uppercase font-bold font-sans bg-cover">Showtime!!!</h1>  <br />
          <ul>
            <li > <RiMovie2Fill /> Cat Diamond @ N14,700 (Saturdays): 6:30pm</li> <br />
            <li> <RiMovie2Fill /> Cat Gold @ N22,500 (Fridays): 8:30pm</li> <br />
            <li> <RiMovie2Fill /> Cat Silver @ N18,700 (Saturdays): 6:30pm</li>
          </ul>
      </div>
 
    )
  }
  