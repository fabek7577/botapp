import React from "react";

const StarsIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path
          d="M18.5 5a5.497 5.497 0 0 1-5.5 5.5 5.49 5.49 0 0 1 5.5 5.5 5.497 5.497 0 0 1 5.5-5.5A5.497 5.497 0 0 1 18.5 5zM6.5 12A5.497 5.497 0 0 1 12 6.5 5.497 5.497 0 0 1 6.5 1 5.497 5.497 0 0 1 1 6.5a5.489 5.489 0 0 1 3.1.95A5.5 5.5 0 0 1 6.5 12zM10.5 13A5.497 5.497 0 0 1 5 18.5a5.49 5.49 0 0 1 5.5 5.5 5.497 5.497 0 0 1 5.5-5.5 5.497 5.497 0 0 1-5.5-5.5z"
          className="fill-[#232326]"
        />
      </svg>
    </div>
  );
};

export default StarsIcon;
