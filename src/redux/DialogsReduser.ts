const ADD_MESSANGER = 'ADD-MESSANGER';



let initialiState = {
    messangers: [
        {id: 1, messanger: "Hi"},
        {id: 2, messanger: "How are you?"},
        {id: 3, messanger: "I fun"},
    ] as Array<messangersType>,
    dialogs: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Vetal"},
        {id: 4, name: "Lyda"},
        {id: 5, name: "Petro"},
        {id: 6, name: "Viktor"},
    ] as Array<dialogsType>
};

type messangersType = {
    id: number
    messanger: string
}
type dialogsType = {
    id: number
    name: string
}

export type initialiStateType = typeof initialiState

const dialogsReduser = (state = initialiState, action: any): initialiStateType => {
    switch (action.type) {
        case ADD_MESSANGER: {
            let newMassenger = {
                id: 4,
                messanger: action.addMassenger,
            }
            let stateCopy = {...state};
            stateCopy.messangers = [...state.messangers];
            stateCopy.messangers.push(newMassenger);
            return stateCopy;
        }
        default:
            return state;
    }
}
export type AddMessangerActionCreaterType = {
    type: typeof ADD_MESSANGER
    addMassenger: string
}

export const AddMessangerActionCreater = (addMassenger: string): AddMessangerActionCreaterType => ({type: ADD_MESSANGER, addMassenger});

export default dialogsReduser;