
import {Satisfy} from "next/font/google";

const poo = Satisfy({ subsets: ["latin"] , weight: ['400']});

export default function layout({children}) {
  return (
    <div>
      {children}
    </div>
  )
}
