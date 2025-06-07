import { TodoList } from '@/components/TodoList';

export default function Home() {
  return (
    <main className='p-4 space-y-4 min-w-7/12 lg:mx-auto'>
      <TodoList />
    </main>
  );
}
