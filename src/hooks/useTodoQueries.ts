'use client';

// 할 일 목록 조회 훅
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/lib/api';

// 할 일 목록 조회
export const useTodoQueries = () => {
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  return todosQuery; // { data, isLoading, isError, refetch, ... }
};
