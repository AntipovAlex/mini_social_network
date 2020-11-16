const ADD_MESSANGER = 'ADD-MESSANGER';
const UPDEATE_NEW_MESSANGER_TEXT = 'UPDEATE-NEW-MESSANGER-TEXT';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSANGER:
            let newMassenger = {
                id: 4,
                messanger: state.newDialogText,
            }
            state.messangers.push(newMassenger);
            state.newDialogText = "";
            return state;
        case UPDEATE_NEW_MESSANGER_TEXT:
            state.newDialogText = action.newMassenger;
            return state;
        default:
            return state;
    }
}
export const AddMessangerActionCreater = () => ({type: ADD_MESSANGER});
export const UpdeateNewMessangerTextActionCreater = (text) => ({type: UPDEATE_NEW_MESSANGER_TEXT, newMassenger: text});

export default dialogsReduser;