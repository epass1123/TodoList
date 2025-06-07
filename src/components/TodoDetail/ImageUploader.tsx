'use client';

import { useRef } from 'react';
import { IconButton } from '@/components/IconButton';

interface ImageUploaderProps {
  imageFile: File | null;
  imageUrl: string;
  onImageChange: (file: File) => void;
  onUpload: (file: File) => void;
  isUploading: boolean;
}

export function ImageUploader({ imageFile, imageUrl, onImageChange, onUpload, isUploading }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const variantClass = imageFile || imageUrl ? 'border-none' : 'border-3 border-dashed border-slate-300';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!/^[a-zA-Z0-9_.-]+$/.test(file.name)) {
        alert('파일 이름은 영어로만 이루어져야 합니다.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }
      onImageChange(file);
      onUpload(file);
    }
  };

  return (
    <div className={`relative h-full w-full rounded-2xl flex items-center justify-center bg-slate-100 ${variantClass}`}>
      {/* placeholder */}
      {!imageFile && !imageUrl && <img src='/img.svg' alt='placeholder' width={64} height={64} className='opacity-50' />}

      {/* 업로드된 이미지 */}
      {imageFile && <img src={URL.createObjectURL(imageFile)} alt='Preview' className='absolute inset-0 w-full h-full object-cover' />}
      {!imageFile && imageUrl && <img src={imageUrl} alt='Uploaded' className='absolute inset-0 w-full h-full object-cover' />}

      {/* IconButton */}
      <div className='absolute bottom-2 right-2'>
        <IconButton hasImage={!!imageFile || !!imageUrl} onClick={() => fileInputRef.current?.click()} />
      </div>
      <input type='file' ref={fileInputRef} className='hidden' onChange={handleFileChange} />

      {/* 업로드 상태 표시 + 애니메이션 */}
      {isUploading && (
        <div className='absolute inset-0 bg-white/70 flex flex-col items-center justify-center text-slate-500 text-sm gap-2'>
          <div className='w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin' />
          <span>이미지 업로드 중...</span>
        </div>
      )}
    </div>
  );
}
