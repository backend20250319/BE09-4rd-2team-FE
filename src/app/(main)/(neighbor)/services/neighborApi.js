import api from '@/src/lib/axios';

// 1. 내가 추가한 이웃
export const getMyAddedNeighbors = () => api.get('/neighbors/my-following/added');

// 2. 나를 추가한 이웃
export const getMyReceivedNeighbors = () => api.get('/neighbors/my-following/received');

// 3. 내가 보낸 서로이웃
export const getSentMutualNeighbors = () => api.get('/neighbors/my-following/sent-mutual');

// 4. 내가 받은 서로이웃
export const getReceivedMutualNeighbors = () => api.get('/neighbors/my-following/received-mutual');

// 5. 이웃 해제 (단일)
export const rejectNeighbor = deleteUserId => api.patch(`/neighbors/${deleteUserId}/reject`);

// 6. 이웃 관계 삭제 (다중)
export const deleteNeighbor = selectedIds => api.delete('/neighbors/delete', { data: selectedIds });

// 7. 이웃 신청 — 다수 수락
export const insertNeighbors = insertUserIds => api.patch('/neighbors/accept', insertUserIds);

// 8. 서로이웃 단체 수락
export const acceptMultipleNeighbors = ids => api.post('/neighbors/batch-accept', ids);

// 9. 서로이웃 단체 거절
export const rejectMultipleNeighbors = ids => api.post('/neighbors/batch-rejected', ids);

// 10. 이웃 관계 변경
export const changeRelationNeighbors = ids => api.post('/neighbors/batch-change', ids);

// 11. 이웃 신청 — 단일
export const insertNeighbor = insertUserId => api.patch(`/neighbors/${insertUserId}/accept`);

// 12. 이웃 신청 취소
export const cancelMyRequest = ids => api.post('/neighbors/batch-cancel', ids);

// 13. 이웃 차단
export const blockNeighbor = ids => api.post('/neighbors/batch-block', ids);
