import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, Left, Right } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center font-light">
      <div className="bg-blue-300">
        <Header />
      </div>
      <div className="flex">
        <div className="w-1/4 bg-gray-500">
          <Left />
        </div>
        <div className="w-1/4 bg-lime-200">
          <Right />
        </div>
      </div>
    </div>
  );
}
