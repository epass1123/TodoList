'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'delete' | 'complete' | 'circle';
  type?: 'button' | 'submit';
}

export const Button = ({ children, onClick, variant = 'default', type = 'button' }: ButtonProps) => {
  const baseClass = `inline-flex items-center justify-center shadow rounded-full px-6 py-2 
    border-2 border-slate-900 shadow-[2px_2px_0_#0f172a] transition-colors hover:cursor-pointer flex-1 sm:flex-none text-body`;

  let variantClass = '';

  if (variant === 'default') {
    variantClass = 'bg-slate-100 text-text-base';
  } else if (variant === 'primary') {
    variantClass = 'bg-primary text-white';
  } else if (variant === 'delete') {
    variantClass = 'bg-delete text-white';
  } else if (variant === 'complete') {
    variantClass = 'bg-complete text-black';
  } else if (variant === 'circle') {
    variantClass = 'bg-primary text-white-full w-10 h-10 text-xl';
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClass} ${variantClass}`}>
      {children}
    </button>
  );
};
