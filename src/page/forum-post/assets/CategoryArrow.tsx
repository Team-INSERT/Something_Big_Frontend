import SVGAttribute from "@/global/types/SVGAttribute.type";
import React from "react";

const CategoryArrow = ({ width, height, isPointable }: SVGAttribute) => {
  return (
    <svg
      width={width || 12}
      height={height || 20}
      style={{
        cursor: isPointable ? "pointer" : "",
      }}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.34727 9.99356L0.997266 2.64356C0.747266 2.39356 0.626266 2.10189 0.634266 1.76856C0.642266 1.43523 0.771599 1.14356 1.02227 0.89356C1.27227 0.64356 1.56393 0.51856 1.89727 0.51856C2.2306 0.51856 2.52227 0.64356 2.77227 0.89356L10.4723 8.56856C10.6723 8.76856 10.8223 8.99356 10.9223 9.24356C11.0223 9.49356 11.0723 9.74356 11.0723 9.99356C11.0723 10.2436 11.0223 10.4936 10.9223 10.7436C10.8223 10.9936 10.6723 11.2186 10.4723 11.4186L2.77227 19.1186C2.52227 19.3686 2.22627 19.4896 1.88427 19.4816C1.54227 19.4736 1.2466 19.3442 0.997266 19.0936C0.747266 18.8436 0.622266 18.5519 0.622266 18.2186C0.622266 17.8852 0.747266 17.5936 0.997266 17.3436L8.34727 9.99356Z"
        fill="#222222"
      />
    </svg>
  );
};

export default CategoryArrow;
