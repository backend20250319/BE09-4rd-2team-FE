import api from '@/src/lib/axios';

// 1. 내가 추가한 이웃
export const getMyAddedNeighbors = userId =>
  api.get('/neighbors/my-following/added', {
    headers: { userId },
  });

// 2. 나를 추가한 이웃
export const getMyReceivedNeighbors = userId =>
  api.get('/neighbors/my-following/received', {
    headers: { userId },
  });

// 3. 내가 보낸 서로이웃
export const getSentMutualNeighbors = userId =>
  api.get('/neighbors/my-following/sent-mutual', {
    headers: { userId },
  });

// 4. 내가 받은 서로이웃
export const getReceivedMutualNeighbors = userId =>
  api.get(`/neighbors/my-following/received-mutual`, {
    headers: { userId },
  });

// 5. 이웃 해제
export const rejectNeighbor = (userId, deleteUserId) =>
  api.patch(`/neighbors/${deleteUserId}/reject`, {
    headers: { userId },
  });

// 9. 이웃 관계 삭제
export const deleteNeighbor = (userId, deleteUserId) =>
  api.delete(`/neighbors/${deleteUserId}/delete`, {
    headers: { userId },
  });

// 6. 이웃 신청(다수)
export const insertNeighbors = (userId, insertUserId) =>
  api.patch(`/neighbors/accept`, insertUserId, {
    headers: { fromUserId: userId, 'Content-Type': 'application/json' },
  });

// 7. 서로이웃 단체 수락
export const acceptMultipleNeighbors = (userId, ids) =>
  api.post('/neighbors/batch-accept', ids, {
    headers: { userId },
  });

// 8. 서로이웃 단체 거절
export const rejectMultipleNeighbors = (userId, ids) =>
  api.post('/neighbors/batch-rejected', ids, {
    headers: { userId },
  });

// 10. 이웃 관계 변경
export const changeRelationNeighbors = (userId, ids) =>
  api.post(`/neighbors/batch-change`, ids, {
    headers: { userId },
  });

// 11. 이웃 신청(단일)
export const insertNeighbor = (userId, insertUserId) =>
  api.patch(
    `/neighbors/${insertUserId}/accept`,
    {},
    {
      headers: { fromUserId: userId, 'Content-Type': 'application/json' },
    },
  );
