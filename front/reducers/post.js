import shortId from 'shortid';


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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_POST: {
        //     return {
        //         ...state,
        //         mainPosts: [dummyPost, ...state.mainPosts],
        //         postAdded: true,
        //     };
        // }
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                addPostLoading: false,
                addPostDone: true,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };

        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:
            const mainPosts = [...state.mainPosts]
            const postIndex = state.mainPosts.findIndex(
                (v) => v.id === action.data.postId
            );
            const post = { ...state.mainPosts[postIndex] };
            const Comments = [...post.Comments, dummyComment(action.data.content),];
            mainPosts[postIndex] = { ...post, Comments };
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };

        default:
            return state;
    }
};

export default reducer;
