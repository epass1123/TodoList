'use client';

import React from 'react';

interface PlusIconProps {
  size?: number;
  className?: string;
}

export const PlusIcon = ({ size = 24, className = '' }: PlusIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='currentColor' className={className}>
      <path d='M12 5v14M5 12h14' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
