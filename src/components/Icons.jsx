import React from "react";

export const Linkedin = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={`w-full h-auto ${className}`}
    >
      <g>
        <circle cx="12" cy="12" r="11" fill="#0173B2"></circle>
        <path
          fill="#FFF"
          d="M8.099 5.896c-.83 0-1.375.545-1.375 1.261 0 .701.526 1.25 1.34 1.25h.012c.847 0 1.375-.549 1.375-1.25C9.436 6.44 8.93 5.896 8.1 5.896zm7.16 3.352c-1.293 0-1.86.707-2.182 1.205v.023h-.023c.004-.006.019-.017.023-.023V9.419h-2.432c.032.685 0 7.296 0 7.296h2.432v-4.08c0-.218.015-.435.08-.59.175-.437.568-.887 1.238-.887.878 0 1.24.666 1.24 1.648v3.91h2.42v-4.183c0-2.243-1.2-3.285-2.796-3.285zm-8.387.17v7.297h2.432V9.42H6.87z"
        ></path>
        <path
          fill="#231F20"
          d="M4.222 19.778A10.966 10.966 0 0012 23c6.075 0 11-4.925 11-11 0-3.038-1.231-5.788-3.222-7.778L4.222 19.778z"
          opacity="0.1"
        ></path>
      </g>
    </svg>
  );
}

export const Github = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={`w-full h-auto ${className}`}
    >
      <g>
        <circle cx="12" cy="12" r="11" fill="#434A54"></circle>
        <path
          fill="#FFF"
          d="M14.313 18.941c0-.283.01-1.207.01-2.354 0-.8-.275-1.323-.582-1.59 1.91-.212 3.917-.937 3.917-4.233 0-.936-.333-1.702-.883-2.303.09-.216.383-1.088-.084-2.27 0 0-.72-.23-2.357.88a8.242 8.242 0 00-2.15-.29 8.216 8.216 0 00-2.147.29c-1.64-1.11-2.36-.88-2.36-.88-.466 1.182-.172 2.054-.083 2.27a3.32 3.32 0 00-.884 2.303c0 3.288 2.003 4.024 3.909 4.24-.245.215-.468.593-.545 1.148-.49.22-1.731.598-2.496-.713 0 0-.454-.824-1.316-.885 0 0-.837-.01-.058.522 0 0 .562.264.952 1.255 0 0 .504 1.532 2.891 1.013.004.717.012 1.392.012 1.597a.468.468 0 01-.052.215 7.967 7.967 0 004.404.073.45.45 0 01-.098-.288z"
        ></path>
        <path
          fill="#231F20"
          d="M4.222 19.778A10.966 10.966 0 0012 23c6.075 0 11-4.925 11-11 0-3.038-1.231-5.788-3.222-7.778L4.222 19.778z"
          opacity="0.1"
        ></path>
      </g>
    </svg>
  );
}

export const Sun = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const Moon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

// export const Moon = ({className}) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       className={`w-full h-auto ${className}`}
//     >
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeDasharray="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       >
//         <path d="M12 21v1m9-10h1M12 3V2M3 12H2">
//           <animate
//             fill="freeze"
//             attributeName="stroke-dashoffset"
//             dur="0.2s"
//             values="4;2"
//           ></animate>
//         </path>
//         <path d="M18.5 18.5l.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19">
//           <animate
//             fill="freeze"
//             attributeName="stroke-dashoffset"
//             begin="0.2s"
//             dur="0.2s"
//             values="4;2"
//           ></animate>
//         </path>
//       </g>
//       <g fill="none" fillOpacity="0">
//         <path d="M15.22 6.03l2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z">
//           <animate
//             id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
//             dur="0.4s"
//             values="0;1"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//         <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
//             dur="0.4s"
//             values="0;1"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//         <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
//             dur="0.4s"
//             values="0;1"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//         <path d="M20.828 9.731l1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
//             dur="0.4s"
//             values="0;1"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//       </g>
//       <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
//         <circle cx="12" cy="12" r="12" fill="#fff"></circle>
//         <circle cx="22" cy="2" r="3" fill="#fff">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="3;12"
//           ></animate>
//         </circle>
//         <circle cx="22" cy="2" r="1">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="1;10"
//           ></animate>
//         </circle>
//       </mask>
//       <circle
//         cx="12"
//         cy="12"
//         r="6"
//         fill="currentColor"
//         mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
//       >
//         <set attributeName="opacity" begin="0.5s" to="0"></set>
//         <animate
//           fill="freeze"
//           attributeName="r"
//           begin="0.1s"
//           dur="0.4s"
//           values="6;10"
//         ></animate>
//       </circle>
//     </svg>
//   );
// }

// export const Sun = ({className}) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       className={`w-full h-auto ${className}`}
//     >
//       <path fill="rgba(255, 255, 255, 0)" d="M0 0H24V24H0z"></path>
//       <g>
//         <animateTransform
//           fill="none"
//           stroke="currentColor"
//           strokeDasharray="2"
//           strokeDashoffset="2"
//           strokeLinecap="round"
//           strokeWidth="2"
//           attributeName="transform"
//           dur="30s"
//           repeatCount="indefinite"
//           type="rotate"
//           values="0 12 12;360 12 12"
//         ></animateTransform>
//       </g>
//       <g fill="currentColor">
//         <path d="M15.22 6.03l2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81-.91-3.06z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//         <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17-.59-1.98z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="0.2s"
//             dur="0.4s"
//             values="1;0"
//           ></animate>
//         </path>
//       </g>
//       <g
//         fill="currentColor"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       >
//         <path d="M7 6a10.994 10.994 0 0012.56 10.89C17.95 19.36 15.17 21 12 21a9 9 0 01-9-9c0-3.17 1.64-5.95 4.11-7.56C7.04 4.95 7 5.47 7 6z"></path>
//         <set attributeName="opacity" begin="0.6s" to="0"></set>
//       </g>
//       <mask>
//         <circle cx="12" cy="12" r="12" fill="#fff"></circle>
//         <circle cx="18" cy="6" r="12" fill="#fff">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.6s"
//             dur="0.4s"
//             values="18;22"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.6s"
//             dur="0.4s"
//             values="6;2"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.6s"
//             dur="0.4s"
//             values="12;3"
//           ></animate>
//         </circle>
//         <circle cx="18" cy="6" r="10">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.6s"
//             dur="0.4s"
//             values="18;22"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.6s"
//             dur="0.4s"
//             values="6;2"
//           ></animate>
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.6s"
//             dur="0.4s"
//             values="10;1"
//           ></animate>
//         </circle>
//       </mask>
//     </svg>
//   );
// }