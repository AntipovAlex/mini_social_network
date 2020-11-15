import React from 'react';
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messanger from "./Messanger/Messanger";
import {AddMessangerActionCreater, UpdeateNewMessangerTextActionCreater} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElement = props.dialogPage.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messangerElement = props.dialogPage.messangers
        .map(messanger => <Messanger messanger={messanger.messanger}/>)

    let newMessangerElement = React.createRef();

    let addMessanger = () => {
        props.dispatch(AddMessangerActionCreater());
    }

    let onDialogChange = () => {
        let text = newMessangerElement.current.value;
        props.dispatch(UpdeateNewMessangerTextActionCreater(text));
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messangers}>
                {messangerElement}
            </div>
            <div>
                <textarea className={style.dialogsImput} onChange={onDialogChange}
                          ref={newMessangerElement}
                          value={props.dialogPage.newDialogText}/>
                <div>
                    <button className={style.button} onClick={addMessanger}> Add messanger </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;