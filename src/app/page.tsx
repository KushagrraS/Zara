"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Images } from "../../public/Images";

export default function Landing() {
  const router = useRouter()
  return (
    <div
      className="h-[100vh] flex justify-center items-center"
    >
      <div className="flex items-center flex-col justify-center cursor-pointer" onClick={()=> router.push('/home')}>
        <Image
          src={Images.LINES}
          alt="Lines"
          className="absolute"
          style={{
            height: 238,
            width: 238,
          }}
        />
        <Image
          src={Images.ZARA_LOGO}
          alt="Zara Logo"
          style={{
            height: 132,
            width: 167,
          }}
        />
      </div>
    </div>
  );
}
