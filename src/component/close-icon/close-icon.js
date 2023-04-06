const CloseIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_848_40126)">
      <rect x="2" y="1" width="44" height="44" rx="8" fill="white" />
      <path
        d="M30.75 16.25L17.25 29.75"
        stroke="#344054"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.75 29.75L17.25 16.25"
        stroke="#1A1A1A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="2.5" y="1.5" width="43" height="43" rx="7.5" stroke="#D0D5DD" />
    </g>
    <defs>
      <filter
        id="filter0_d_848_40126"
        x="0"
        y="0"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_848_40126"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_848_40126"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CloseIcon;
