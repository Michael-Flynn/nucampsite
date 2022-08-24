// organizing the logic dealing with different section's state
import { COMMENTS } from  '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId =(campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
}