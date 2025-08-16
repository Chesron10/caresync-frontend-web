import React from "react";

type props = {
  title: string;
  onClick?: () => void;
  className?: string;
};

const CommonButton = ({ title, onClick, className }: props) => {
  return (
    <button
      onClick={onClick}
      className={`linear-gradient font-semibold font-poppins text-sm hover:inverse-gradient transition-all ease-in text-white rounded-xl ${className}`}
    >
      {title}
    </button>
  );
};

export default CommonButton;
