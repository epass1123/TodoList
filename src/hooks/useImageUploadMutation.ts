'use client';

import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '@/lib/api';

export const useImageUploadMutation = () => {
  return useMutation({
    mutationFn: uploadImage,
  });
};
