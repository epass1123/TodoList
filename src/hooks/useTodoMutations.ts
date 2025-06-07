'use client';

// 할 일 생성, 수정, 삭제 훅
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo, updateTodo, deleteTodo } from '@/lib/api';

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  // 할 일 생성
  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  // 할 일 수정
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: unknown }) => updateTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  // 할 일 삭제
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
