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
        <Left />
        <Right />
      </div>
    </div>
  );
}

const data = {
  question: {
    title: `Answer 1`,
    detail: `question detail 1`,
  },
  answer: [
    {
      text: `text 1`,
      rating: 10,
    },
    {
      text: `text 2`,
      rating: 5,
    },
    {
      text: `text 3`,
      rating: 8,
    },
  ],
};
