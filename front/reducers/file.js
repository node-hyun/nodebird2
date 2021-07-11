import produce from 'immer';

export const initialState = {
    filesToUpload: [],
    addFileLoading: false,
    addFileDone: false,
    addFileError: null,
};

// const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: '제로초',
//     },
//     Images: [],
//     Comments: [],
// });

export const ADD_FILE_REQUEST = 'ADD_FILE_REQUEST';
export const ADD_FILE_SUCCESS = 'ADD_FILE_SUCCESS';
export const ADD_FILE_FAILURE = 'ADD_FILE_FAILURE';


export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_FILE_REQUEST:
                draft.FileLoading = true;
                draft.FileDone = false;
                draft.FileError = null;
                break;
            case ADD_FILE_SUCCESS:
                draft.addFileLoading = false;
                draft.addFileDone = true;
                draft.filesToUpload.push(...action.data);
                break;
            case ADD_FILE_FAILURE:
                draft.addFileLoading = false;
                draft.addFileError = action.error;
                break;
            default:
                return state;
        }
    })
}

// export default reducer;
