import produce from 'immer';

export const initialState = {
    me: null,
    signUpData: {},
    loginData: {},
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    nickname: '제로초',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
    Followers: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
});

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case "LOG_IN_REQUEST":
                // return {
                //     ...state,
                //     logInLoading: true,
                // };
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case "LOG_IN_SUCCESS":
                // return {
                //     ...state,
                //     logInLoading: false,
                //     logInDone: true,
                //     me: dummyUser(action.data)
                // };
                draft.logInDone = true;
                draft.logInLoading = false;
                draft.me = dummyUser(action.data);
                break;
            case "LOG_IN_FAILURE":
                // return {
                //     ...state,
                //     logInLoading: false,
                //     logInDone: false,
                // };
                draft.logInLoading = false;
                draft.logInError = action.error
                break;
            case "LOG_OUT_REQUEST":
                // return {
                //     ...state,
                //     logOutLoading: true,
                // };
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = false;
                break;
            case "LOG_OUT_SUCCESS":
                // return {
                //     ...state,
                //     logOutLoading: false,
                //     logOutDone: true,
                //     me: null,
                // };
                draft.logOutLoading = false;
                draft.logOutDone = true
                draft.me = null;
                break;
            case "LOG_OUT_FAILURE":
                // return {
                //     ...state,
                //     logOutLoading: false,
                //     logOutDone: false,
                // };
                draft.logOutLoading = false,
                    draft.logOutDone = false
            case ADD_POST_TO_ME:
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: [{ id: action.data }, ...state.me.Posts],
                //     },
                // };
                draft.me.Posts.unshift({ id: action.data });
                break;
            case REMOVE_POST_OF_ME:
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: state.me.Posts.filter((v) => v.id !== action.data),
                //     }
                // }
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
                break;
            default:
                // return state;
                break;
        }  // switch 문 종료 
    });
};

export default reducer;
