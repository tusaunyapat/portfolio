import Link from "next/link";
import {
  FaSquareFacebook,
  // FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneVolume,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-row bg-slate-700 w-full items-center justify-center ">
      <div className="w-full flex flex-row text-sm text-slate-100 items-center justify-evenly">
        {/* <p className="font-bold text-white">Keep in touch</p> */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col py-2">
            <p className="py-2">
              <FaSquareFacebook className="text-xl" />
            </p>
            <p className="py-2">
              <FaPhoneVolume className="text-xl" />
            </p>
            <p className="py-2">{/* <FaLinkedin className="text-xl" /> */}</p>
          </div>

          <div className="flex flex-col py-2">
            <p className="py-2">Tus Aunyapat</p>
            <p className="py-2">0959501622</p>
            {/* <p className="py-2">link-in</p> */}
          </div>
        </div>
        <div className="flex flex-row gap-10 ">
          <div className="flex flex-col py-2">
            <p className="py-2">
              <FaGithub className="text-xl" />
            </p>
            <p className="py-2">
              <FaEnvelope className="text-xl" />
            </p>
          </div>
          <div className="flex flex-col py-2">
            <Link href="https://github.com/tusaunyapat">
              <p className="py-2 hover:text-yellow-500">github/tusaunyapat</p>
            </Link>
            <p className="py-2">aunyapat.nit@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
