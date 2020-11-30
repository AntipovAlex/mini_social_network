import React from 'react';
import {AddMessangerActionCreater, UpdeateNewMessangerTextActionCreater} from "../../redux/DialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer1 = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogPage;

                let addMessanger = () => {
                    store.dispatch(AddMessangerActionCreater());
                }

                let updateNewMessangeText = (text) => {
                    store.dispatch(UpdeateNewMessangerTextActionCreater(text));
                }

                return <Dialogs addMassenger={addMessanger} newDialogText={state.newDialogText}
                                updateNewMessangeText={updateNewMessangeText} dialogPage={state}/>
            }}
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state) => {
    return {
        newDialogText: state.newDialogText,
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMassenger: () => {
            dispatch(AddMessangerActionCreater());
        },
        updateNewMessangeText: (text) => {
            dispatch(UpdeateNewMessangerTextActionCreater(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;