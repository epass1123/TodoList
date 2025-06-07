'use client';

import Image from 'next/image';
import React from 'react';

interface IconButtonProps {
  hasImage: boolean; // true: edit icon, false: plus icon
  onClick: () => void;
  size?: number; // 버튼 크기 (기본 48)
}

export const IconButton = ({ hasImage, onClick, size = 48 }: IconButtonProps) => {
  const iconSrc = hasImage ? '/edit.svg' : '/plus.svg';
  const buttonStyle = hasImage ? 'bg-slate-600 text-white border-slate-900 border-3' : 'bg-slate-200 text-slate-400 border-slate-200';
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${buttonStyle} flex items-center justify-center rounded-full hover: cursor-pointer`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image src={iconSrc} alt={hasImage ? 'edit-button' : 'plus-button'} width={size / 2} height={size / 2} />
    </button>
  );
};
