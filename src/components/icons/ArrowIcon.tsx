import React from 'react';

export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 15C15.8333 30.1667 48.2 -14.6 98 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M90 9L98 15L90 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);