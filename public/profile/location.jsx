import React from "react";

const LocationIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="28"
        height="28"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <defs></defs>
        <g
          strokeMiterlimit={10}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth={1}
          transform="translate(-7.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 45 0 C 25.463 0 9.625 15.838 9.625 35.375 c 0 8.722 3.171 16.693 8.404 22.861 L 45 90 l 26.97 -31.765 c 5.233 -6.167 8.404 -14.139 8.404 -22.861 C 80.375 15.838 64.537 0 45 0 z M 45 48.705 c -8.035 0 -14.548 -6.513 -14.548 -14.548 c 0 -8.035 6.513 -14.548 14.548 -14.548 s 14.548 6.513 14.548 14.548 C 59.548 42.192 53.035 48.705 45 48.705 z"
            strokeMiterlimit={10}
            strokeLinejoin="miter"
            strokeWidth={1}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default LocationIcon;
