'use client';

import React from 'react';
import { Checkbox } from '@/components/CheckBox';

interface TodoItemProps {
  name: string;
  isCompleted: boolean;
  onToggle: (newChecked: boolean) => void;
  strikeThrough?: boolean;
}

export const TodoItem = ({ name, isCompleted, onToggle, strikeThrough = false }: TodoItemProps) => {
  return (
    <div
      className={`flex items-center justify-between border-2 border-slate-900 rounded-full px-4 py-2 transition-colors
      ${isCompleted ? 'bg-light-primary' : 'bg-white'}`}
    >
      {/* 좌측: 아이콘 + 이름 */}
      <div className='flex items-center gap-2'>
        <Checkbox checked={isCompleted} onChange={onToggle} />
        <span className={`text-text-base ${strikeThrough ? 'line-through' : ''}`}>{name}</span>
      </div>
    </div>
  );
};
