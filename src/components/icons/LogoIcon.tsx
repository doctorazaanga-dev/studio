import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M24 30C30.6274 30 36 24.6274 36 18C36 11.3726 30.6274 6 24 6C17.3726 6 12 11.3726 12 18C12 24.6274 17.3726 30 24 30Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
    <path
      d="M19 42C21.7614 42 24 39.7614 24 37C24 34.2386 21.7614 32 19 32C16.2386 32 14 34.2386 14 37C14 39.7614 16.2386 42 19 42Z"
      fill="currentColor"
    />
    <path
      d="M34 42C36.7614 42 39 39.7614 39 37C39 34.2386 36.7614 32 34 32C31.2386 32 29 34.2386 29 37C29 39.7614 31.2386 42 34 42Z"
      fill="currentColor"
    />
  </svg>
);
