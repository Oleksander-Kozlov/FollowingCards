// import * as React from 'react';
const BorderImg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={89}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#EBD8FF"
        fillRule="evenodd"
        d="M45 71.111c17.182 0 31.111-13.929 31.111-31.111C76.111 22.818 62.182 8.889 45 8.889 27.818 8.889 13.889 22.818 13.889 40c0 17.182 13.929 31.111 31.111 31.111ZM45 80c22.091 0 40-17.909 40-40S67.091 0 45 0 5 17.909 5 40s17.909 40 40 40Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={88.783}
        height={90.979}
        x={0.608}
        y={-2.196}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4.392} />
        <feGaussianBlur stdDeviation={2.196} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_832_68" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_832_68"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4.392} />
        <feGaussianBlur stdDeviation={1.647} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.985684 0 0 0 0 0.972083 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_832_68" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-2.196} />
        <feGaussianBlur stdDeviation={2.196} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.680944 0 0 0 0 0.480757 0 0 0 0 0.891667 0 0 0 1 0" />
        <feBlend
          in2="effect2_innerShadow_832_68"
          result="effect3_innerShadow_832_68"
        />
      </filter>
    </defs>
  </svg>
);
export default BorderImg;
