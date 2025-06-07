// src/lib/api.ts

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
export const tenantId = process.env.NEXT_PUBLIC_TENANT_ID; //

// 투두 목록 조회
export async function fetchTodos() {
  console.log(API_BASE, tenantId);
  const res = await fetch(`${API_BASE}/${tenantId}/items`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}

// 투두 생성
export async function createTodo(title: string) {
  const res = await fetch(`${API_BASE}/${tenantId}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: title }),
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json();
}

// 투두 삭제
export async function deleteTodo(itemId: number) {
  const res = await fetch(`${API_BASE}/${tenantId}/items/${itemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete todo');
  return res.json();
}

// 투두 상세 조회
export async function fetchTodoDetail(itemId: number) {
  const res = await fetch(`${API_BASE}/${tenantId}/items/${itemId}`, {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch todo detail');
  }
  return res.json();
}

// 투두 수정
export async function updateTodo(id: number, data: unknown) {
  const res = await fetch(`${API_BASE}/${tenantId}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update todo');
  return res.json();
}

// 이미지 업로드
export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`${API_BASE}/${tenantId}/images/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('이미지 업로드 실패');
  }

  const data = await res.json();
  return data.url; // 👉 이미지 URL 반환
}
