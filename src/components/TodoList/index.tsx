'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';
import { PlusButton } from '@/components/TodoList/PlusButton';
import { Input } from '@/components/common/Input';
import { TodoItem } from '@/components/TodoList/TodoItem';
import { useTodoMutations } from '@/hooks/useTodoMutations';
import { useTodoQueries } from '@/hooks/useTodoQueries';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const TodoList = () => {
  const router = useRouter();
  const { data: todos = [], isLoading, isError } = useTodoQueries();
  const { createMutation, updateMutation } = useTodoMutations();
  const [newTitle, setNewTitle] = useState('');

  // 할 일 추가
  const handleAddTodo = () => {
    if (!newTitle.trim()) return;
    createMutation.mutate(newTitle, {
      onSuccess: () => setNewTitle(''),
    });
  };

  // 할 일 완료 상태 변경
  const handleToggleTodo = (id: number, isCompleted: boolean) => {
    const target = todos.find((t: { id: number }) => t.id === id);
    if (!target) return;

    updateMutation.mutate({
      id,
      data: {
        name: target.name,
        isCompleted,
        memo: target.memo || '',
      },
    });
  };

  const todoItems = todos.filter((item: { isCompleted: unknown }) => !item.isCompleted);
  const doneItems = todos.filter((item: { isCompleted: unknown }) => item.isCompleted);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid'></div>
      </div>
    );
  }
  if (isError) return <div>Error loading todos.</div>;

  return (
    <div className='space-y-6'>
      {/* 추가 폼 */}
      <div className='flex gap-2 items-center'>
        <Input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='할 일을 입력하세요' />
        <div className='hidden sm:block'>
          <Button variant={todos.length === 0 ? 'primary' : 'default'} onClick={handleAddTodo}>
            + 추가하기
          </Button>
        </div>
        <div className='block sm:hidden'>
          <PlusButton variant={todos.length === 0 ? 'primary' : 'default'} onClick={handleAddTodo} />
        </div>
      </div>

      {/* Todo 목록 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-7'>
        {/* TO DO */}
        <div>
          <Image src='/todo.svg' alt='To Do' width={80} height={40} className='mb-4 mx-0' />
          {todoItems.length === 0 ? (
            <div className='flex flex-col items-center text-slate-400 text-sm space-y-2'>
              <Image src='/TodoLarge.svg' alt='Empty To Do' width={160} height={160} />
              <p className='text-center text-body'>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </p>
            </div>
          ) : (
            <div className='space-y-2'>
              {todoItems.map((item: { id: number; name: string; isCompleted: boolean }) => (
                <div key={item.id} onClick={() => router.push(`/items/${item.id}`)} className='block mb-3 hover:cursor-pointer'>
                  <TodoItem name={item.name} isCompleted={item.isCompleted} onToggle={newChecked => handleToggleTodo(item.id, newChecked)} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DONE */}
        <div>
          <Image src='/done.svg' alt='Done' width={80} height={40} className='mb-4 mx-0' />
          {doneItems.length === 0 ? (
            <div className='flex flex-col items-center text-slate-400 text-sm space-y-2'>
              <Image src='/DoneLarge.svg' alt='Empty Done' width={160} height={160} />
              <p className='text-center'>
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </p>
            </div>
          ) : (
            <div className='space-y-2'>
              {doneItems.map((item: { id: number; name: string; isCompleted: boolean }) => (
                <div key={item.id} onClick={() => router.push(`/items/${item.id}`)} className='block mb-3 hover:cursor-pointer'>
                  <TodoItem name={item.name} isCompleted={item.isCompleted} onToggle={newChecked => handleToggleTodo(item.id, newChecked)} strikeThrough />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
