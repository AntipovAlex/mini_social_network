const ADD_MESSANGER = 'ADD-MESSANGER';
const UPDEATE_NEW_MESSANGER_TEXT = 'UPDEATE-NEW-MESSANGER-TEXT';

let initialiState = {
    messangers: [
        {id: 1, messanger: "Hi"},
        {id: 2, messanger: "How are you?"},
        {id: 3, messanger: "I fun"},
    ],
    dialogs: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Vetal"},
        {id: 4, name: "Lyda"},
        {id: 5, name: "Petro"},
        {id: 6, name: "Viktor"},
    ],
    newDialogText: "Hello? hello"
};

const dialogsReduser = (state = initialiState, action) => {
    switch (action.type) {
        case ADD_MESSANGER: {
            let newMassenger = {
                id: 4,
                messanger: state.newDialogText,
            }
            let stateCopy = {...state};
            stateCopy.messangers = [...state.messangers]
            stateCopy.messangers.push(newMassenger);
            stateCopy.newDialogText = "";
            return stateCopy;
        }
        case UPDEATE_NEW_MESSANGER_TEXT: {
            let stateCopy = {...state}
            stateCopy.newDialogText = action.newMassenger;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const AddMessangerActionCreater = () => ({type: ADD_MESSANGER});
export const UpdeateNewMessangerTextActionCreater = (text) => ({type: UPDEATE_NEW_MESSANGER_TEXT, newMassenger: text});

export default dialogsReduser;