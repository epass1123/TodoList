'use client';

import React from 'react';
import { PlusIcon } from '@/components/TodoList/PlusIcon';

interface PlusButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'primary';
}

export const PlusButton = ({ onClick, variant = 'default', disabled = false }: PlusButtonProps) => {
  const baseClass =
    'flex items-center justify-center rounded-[18px] bg-primary px-2 py-2 text-white font-bold border-2 border-slate-900 shadow-[2px_2px_0_#0f172a] hover:cursor-pointer';
  let variantClass = '';
  let iconColor = '';

  if (variant === 'default') {
    variantClass = 'bg-slate-200';
    iconColor = 'text-slate-900';
  } else if (variant === 'primary') {
    variantClass = 'bg-primary text-white';
    iconColor = 'text-white';
  }
  return (
    <button type='button' onClick={onClick} disabled={disabled} className={`${baseClass} ${variantClass}`}>
      <PlusIcon size={20} className={`${iconColor}`} />
    </button>
  );
};
