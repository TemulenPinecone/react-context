import { useState } from "react";
import { Header, Left, Right } from "@/components";

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
