'use client';

interface MemoEditorProps {
  memo: string;
  onMemoChange: (value: string) => void;
}

export function MemoEditor({ memo, onMemoChange }: MemoEditorProps) {
  return (
    <div className="relative h-full rounded-3xl bg-[url('/memo.svg')] bg-cover flex flex-col justify-center items-center">
      <h3 className='text-lg font-bold text-center text-warning mb-2'>Memo</h3>
      <textarea
        value={memo}
        onChange={e => onMemoChange(e.target.value)}
        placeholder='메모를 입력하세요'
        className='w-[90%] h-[80%] bg-transparent outline-none resize-none text-[var(--color-text-base)] text-center placeholder:text-center text-regular'
      />
    </div>
  );
}
