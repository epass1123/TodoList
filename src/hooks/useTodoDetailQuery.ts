'use client';

// 할 일 상세 조회 훅
import { useQuery } from '@tanstack/react-query';
import { fetchTodoDetail } from '@/lib/api';

// 할 일 상세 조회
export const useTodoDetailQuery = (itemId: number) => {
  const detailQuery = useQuery({
    queryKey: ['todo', itemId],
    queryFn: () => fetchTodoDetail(itemId),
    enabled: !!itemId, // itemId 있을때만 실행
  });

  return detailQuery;
};
