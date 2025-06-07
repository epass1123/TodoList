'use client';

import React from 'react';
import { Checkbox } from '@/components/common/CheckBox';

interface ItemTitleProps {
  name: string;
  onNameChange: (value: string) => void;
  isCompleted: boolean;
  onCompletedChange: (checked: boolean) => void;
}

export const ItemTitle = ({ name, onNameChange, isCompleted, onCompletedChange }: ItemTitleProps) => {
  const placeholder = '입력하세요';

  const wrapperClass = [
    'flex items-center justify-center gap-1',
    'border-2 border-slate-900 rounded-[20px] px-4 py-2 w-full',
    'transition-colors',
    isCompleted ? 'bg-light-primary text-text-base' : 'bg-white text-text-base',
  ].join(' ');

  const inputWrapperClass = 'inline-grid grid-cols-1 grid-rows-1 items-center min-w-[50px]';
  const inputClass = 'bg-transparent outline-none text-text-base text-center border-none col-start-1 row-start-1 w-full text-title underline';
  const mirrorClass = 'invisible whitespace-pre col-start-1 row-start-1 text-text-base text-center pointer-events-none';

  return (
    <div className={wrapperClass}>
      <Checkbox checked={isCompleted} onChange={onCompletedChange} />
      <div className={inputWrapperClass}>
        <input type='text' value={name} onChange={e => onNameChange(e.target.value)} className={inputClass} />
        <div className={mirrorClass}>{name || placeholder}</div>
      </div>
    </div>
  );
};
