import React from "react";

interface AboutContent {
  name: string;
  desc: string;
}

export default function AboutContent({ name, desc }: AboutContent) {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="font-semibold w-1/3 break-words">{name}:</h2>
      <p className="w-2/3 break-words">{desc}</p>
    </div>
  );
}
