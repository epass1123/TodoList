'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoDetail } from '@/lib/api';

export const useTodoDetailQuery = (itemId: number) => {
  const detailQuery = useQuery({
    queryKey: ['todo', itemId],
    queryFn: () => fetchTodoDetail(itemId),
    enabled: !!itemId, // itemId 있을때만 실행
  });

  return detailQuery;
};
