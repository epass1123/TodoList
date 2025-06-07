'use client';

import { useParams } from 'next/navigation';
import TodoDetail from '@/components/TodoDetail';

export default function ItemDetailPage() {
  const { itemId } = useParams();

  return <TodoDetail itemId={Number(itemId)} />;
}
