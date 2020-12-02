import React from 'react';
import {AddMessangerActionCreater, UpdeateNewMessangerTextActionCreater} from "../../redux/DialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        dialogPage: state.dialogPage
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);