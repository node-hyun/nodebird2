import shortId from 'shortid';
import produce from 'immer';


export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: 'terecal',
            },
            content: 'sample 게시글 #test',
            Images: [{
                src: 'https://image.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg',
            }, {
                src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
            }, {
                src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
            }],
            Comments: [{
                User: {
                    nickname: 'nero',
                },
                content: '첫번째 더미 댓글 fisrt ',
            }, {
                User: {
                    nickname: 'hero',
                },
                content: '두번째 더미 댓글 second',
            }]
        },
    ],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

};


const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: "제로초",
    },
});

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';


export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;

            case ADD_COMMENT_REQUEST:
                // return {
                //     ...state,
                //     addCommentLoading: true,
                //     addCommentDone: false,
                //     addCommentError: null,
                // };
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:
                // 댓글이 달릴 포스팅 객체 찾기
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
            case ADD_COMMENT_FAILURE:

                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;

            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;

            default:
                return state;
        }
    })
}

// export default reducer;
