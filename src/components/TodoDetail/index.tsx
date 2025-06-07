'use client';

import { useTodoDetailQuery } from '@/hooks/useTodoDetailQuery';
import { useTodoMutations } from '@/hooks/useTodoMutations';
import { useImageUploadMutation } from '@/hooks/useImageUploadMutation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ItemTitle } from '@/components/TodoDetail/ItemTitle';
import { Button } from '@/components/common/Button';
import { ImageUploader } from './ImageUploader';
import { MemoEditor } from './MemoEditor';

interface TodoDetailProps {
  itemId: number;
}

export default function TodoDetail({ itemId }: TodoDetailProps) {
  const router = useRouter();
  const { updateMutation, deleteMutation } = useTodoMutations();
  const { data, isLoading, isError } = useTodoDetailQuery(itemId);
  const imageUploadMutation = useImageUploadMutation();
  const [name, setName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [memo, setMemo] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
      setIsCompleted(data.isCompleted);
      setMemo(data.memo || '');
      setImageUrl(data.imageUrl || '');
    }
  }, [data]);

  const handleUpdate = () => {
    updateMutation.mutate(
      {
        id: itemId,
        data: {
          name,
          isCompleted,
          memo,
          imageUrl,
        },
      },
      {
        onSuccess: () => {
          router.push('/');
        },
      }
    );
  };

  const handleDelete = () => {
    deleteMutation.mutate(itemId, {
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid'></div>
      </div>
    );
  }
  if (isError || !data) return <div>Error loading item.</div>;

  return (
    <div className='space-y-6 bg-white flex-1 min-w-full lg:min-w-7/12 mx-auto'>
      <div className='flex flex-col space-y-5 pt-6 px-6 lg:px-10'>
        <ItemTitle name={name} onNameChange={setName} isCompleted={isCompleted} onCompletedChange={setIsCompleted} />

        <div className='grid gap-6 items-start grid-cols-1 lg:grid-cols-[4fr_5fr] h-[60vh] lg:h-[20vw] '>
          <ImageUploader
            imageFile={imageFile}
            imageUrl={imageUrl}
            onImageChange={file => setImageFile(file)}
            onUpload={file => {
              imageUploadMutation.mutate(file, {
                onSuccess: uploadedUrl => {
                  setImageUrl(uploadedUrl);
                },
                onError: () => {
                  alert('이미지 업로드 실패');
                },
              });
            }}
            isUploading={imageUploadMutation.isPending}
          />

          <MemoEditor memo={memo} onMemoChange={setMemo} />
        </div>

        <div className='flex gap-2 justify-center w-full lg:justify-end'>
          <Button variant={data.isCompleted ? 'complete' : 'default'} onClick={handleUpdate}>
            <img src='/check.svg' alt='check' className='w-5 h-5 mr-2' />
            수정 완료
          </Button>
          <Button type='button' variant='delete' onClick={handleDelete}>
            <img src='/X.svg' alt='X' className='w-5 h-5 mr-2' />
            삭제하기
          </Button>
        </div>
      </div>
    </div>
  );
}
