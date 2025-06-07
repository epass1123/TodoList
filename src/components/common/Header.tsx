'use client';

// 헤더 컴포넌트
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className='bg-white border-b border-slate-200 px-6 lg:px-0 py-4 '>
      <div className=' mx-auto flex items-center lg:max-w-7/12'>
        <Link href='/'>
          <Image src='/Size=Large.svg' alt='Logo' width={120} height={40} priority className='hidden sm:block' />
          <Image src='/Size=Small.svg' alt='Logo' width={80} height={30} priority className='block sm:hidden' />
        </Link>
      </div>
    </header>
  );
};
