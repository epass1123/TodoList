'use client';

// 이미지 업로드 훅
import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '@/lib/api';

// 이미지 업로드
export const useImageUploadMutation = () => {
  return useMutation({
    mutationFn: uploadImage,
  });
};
