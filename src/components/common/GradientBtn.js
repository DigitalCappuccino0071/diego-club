import Link from "next/link";
import React from "react";

const GradientBtn = ({ title, linkUrl }) => {
  return (
    <Link
      href={`${linkUrl}`}
      className=" bg-white/20 border-2 border-white rounded-full text-white py-3 px-8 w-fit"
    >
      {title}
    </Link>
  );
};

export default GradientBtn;
