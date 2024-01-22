import React from "react";
import Rating from "./Rating";

export default function Answer(props) {
  const { index } = props;

  return (
    <div>
      <Rating index={index} />
    </div>
  );
}
