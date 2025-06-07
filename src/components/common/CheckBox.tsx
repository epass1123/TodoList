'use client';

import React from 'react';
import Image from 'next/image';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox = ({ checked, onChange, disabled = false }: CheckboxProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <button type='button' onClick={handleClick} disabled={disabled} className='flex items-center justify-center w-8 h-8 hover:cursor-pointer'>
      <Image src={checked ? '/checkDone.svg' : '/checkDefault.svg'} alt={checked ? '완료됨' : '진행중'} width={30} height={30} />
    </button>
  );
};
