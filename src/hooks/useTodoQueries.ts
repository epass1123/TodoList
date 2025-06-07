'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/lib/api';

export const useTodoQueries = () => {
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  return todosQuery; // { data, isLoading, isError, refetch, ... }
};
