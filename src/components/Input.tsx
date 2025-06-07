'use client';

import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

export const Input = ({ value, onChange, placeholder = '', type = 'text', disabled = false }: InputProps) => {
  const baseClass =
    'bg-slate-100 border-2 border-slate-900 shadow-[2px_2px_0_#0f172a] flex-grow rounded-full px-4 py-2 text-text-base placeholder-slate-400 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-regular';

  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} className={baseClass} />;
};
